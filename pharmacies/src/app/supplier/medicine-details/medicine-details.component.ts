import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDto } from '../DTOs/order-dto';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {

  public displayedColumns: string[] = ['Code', 'Name', 'Type', 'Manufacturer', 'Quantity'];

  public order : OrderDto = new OrderDto(0, [], new Date(), "", "");

  constructor(private supplierService : SupplierService, private router : Router, private route : ActivatedRoute, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.supplierService.getAllOrders().subscribe(
      (val) => { this.order = val.find(v => v.id == Number(this.route.snapshot.paramMap.get('id')));  }
    )
  }

}
