import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineToOrderDTO } from '../DTOs/medicine-to-order-dto';
import { NewMedicineQuantityDTO } from '../DTOs/new-medicine-quantity-dto';
import { NewOrderDTO } from '../DTOs/new-order-dto';
import { OfferDTO } from '../DTOs/offer-dto';
import { OrderDTO } from '../DTOs/order-dto';
import { OrderedMedicineDTO } from '../DTOs/ordered-medicine-dto';
import { UpdateOrderDTO } from '../DTOs/update-order-dto';
import { MedicineService } from '../service/medicine.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(private orderService : OrderService, private router : Router, private route : ActivatedRoute, private medicineService : MedicineService, private snackBar : MatSnackBar) { }

  public allMedicines : MedicineToOrderDTO[] = [];

  displayedColumns: string[] = ['Select', 'Code', 'Name', 'Type', 'Manufacturer', 'Offers'];
  displayedColumns2: string[] = ['Code', 'Name', 'Type', 'Manufacturer', 'Offers', 'Quantity'];

  dataSource = new MatTableDataSource<MedicineToOrderDTO>(this.allMedicines);
  selection = new SelectionModel<MedicineToOrderDTO>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public minDate : Date = new Date();
  public selectedDate = new FormControl(new Date());
  public minTime : string = new Date(this.selectedDate.value).getDate() == this.minDate.getDate()
                         && new Date(this.selectedDate.value).getMonth() == this.minDate.getMonth()  
                         && new Date(this.selectedDate.value).getFullYear() == this.minDate.getFullYear()
                          ? new Date().getHours() + ":" + new Date().getMinutes() : "00:00";
  public selectedTime : string = this.minTime;

  public quantities : number[] = [];

  public order : OrderDTO = new OrderDTO(0, [], new Date(), false, "", false, [], new OfferDTO(0, "", 0));
  
  ngOnInit(): void {
    this.get();
  }

  get() {
    this.medicineService.getAll().subscribe(
      (val) => {this.allMedicines = val; this.dataSource.data = this.allMedicines; this.dataSource.paginator = this.paginator;
                this.orderService.getAll().subscribe(
                  (val) => { this.order = val.find(v => v.id == Number(this.route.snapshot.paramMap.get('id'))); if (!this.order.editable) this.router.navigate(['pharmacy-admin/order/' + this.route.snapshot.paramMap.get('id')]); this.findSelected()
                      }
                    )
      },
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  findSelected() {
    this.selectedTime = this.order.deadline[3] + ":" + this.order.deadline[4];
    this.selectedDate = new FormControl(new Date(this.order.deadline[0], Number(this.order.deadline[1])-1, this.order.deadline[2]));
    this.minTime = new Date(this.selectedDate.value).getDate() == this.minDate.getDate()
                                  && new Date(this.selectedDate.value).getMonth() == this.minDate.getMonth()  
                                  && new Date(this.selectedDate.value).getFullYear() == this.minDate.getFullYear()
                                  ? new Date().getHours() + ":" + new Date().getMinutes() : "00:00";
                                  let selectedMeds : MedicineToOrderDTO[] = [];
    this.selectedTime = this.order.deadline[3] + ":" + this.order.deadline[4];
    for(let m of this.allMedicines) {
      if(this.order.medicines.some(mq => mq.medicine.id == m.id)) {
        m['quantity'] = this.order.medicines.find(mq => mq.medicine.id == m.id).quantity;
        selectedMeds.push(m);
      }
    }
    for(let m of selectedMeds) {
      this.selection.select(m);
    }
  }

  update() {
    let valid = true;
    for(let data of this.selection.selected) {
      if (data['quantity'] == undefined || Number(data['quantity']) > 1000 || Number(data['quantity']) < 0) {
        this.openSnackBar("All quantities should be set and be between 1 and 999", "Okay");
        valid = false;
        break;
      }
    }
    if(valid) {
      let medicines : NewMedicineQuantityDTO[] = [];
      for(let data of this.selection.selected) {
        medicines.push(new NewMedicineQuantityDTO(data.id, data['quantity']));
      }
      let date = new Date(this.selectedDate.value);
      date.setHours(Number(this.selectedTime.substr(0, 2)) + 1);
      date.setMinutes(Number(this.selectedTime.substr(3, 2)));
      let order = new UpdateOrderDTO(this.order.id, new NewOrderDTO(medicines, date));
      this.orderService.update(order).subscribe(
        (val) => {this.openSnackBar("Order successfully updated!", "Okay"); this.router.navigate(['pharmacy-admin/orders'])},
        error => this.openSnackBar(error.error.message, "Okay")
      )
    }
  }

  checkMinTime() {
    this.minTime = new Date(this.selectedDate.value).getDate() == this.minDate.getDate()
    && new Date(this.selectedDate.value).getMonth() == this.minDate.getMonth()  
    && new Date(this.selectedDate.value).getFullYear() == this.minDate.getFullYear()
     ? new Date().getHours() + ":" + new Date().getMinutes() : "00:00";
    this.selectedTime = this.minTime;
  }

  delete() {
    this.orderService.delete(Number(this.route.snapshot.paramMap.get('id'))).subscribe(
      (val) => {this.openSnackBar("Order successfully deleted!", "Okay"); this.router.navigate(['pharmacy-admin/orders'])},
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

}
