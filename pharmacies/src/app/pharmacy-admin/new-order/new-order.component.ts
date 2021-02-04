import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MedicineToOrderDTO } from '../DTOs/medicine-to-order-dto';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  constructor(private medicineService : MedicineService, private snackBar : MatSnackBar) { }

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
  public selectedTime = this.minTime;

  public quantities : number[] = [];
  
  ngOnInit(): void {
    this.medicineService.getAll().subscribe(
      (val) => {this.allMedicines = val; this.dataSource.data = this.allMedicines; this.dataSource.paginator = this.paginator;},
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  checkMinTime() {
    this.minTime = new Date(this.selectedDate.value).getDate() == this.minDate.getDate()
    && new Date(this.selectedDate.value).getMonth() == this.minDate.getMonth()  
    && new Date(this.selectedDate.value).getFullYear() == this.minDate.getFullYear()
     ? new Date().getHours() + ":" + new Date().getMinutes() : "00:00";
    this.selectedTime = this.minTime;
  }

  create() {
    let valid = true;
    for(let data of this.selection.selected) {
      if (data['quantity'] == undefined || Number(data['quantity']) > 1000 || Number(data['quantity']) < 0) {
        this.openSnackBar("All quantities should be set and be between 1 and 999", "Okay");
        valid = false;
        break;
      }
    }
    if(valid) {
      
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
