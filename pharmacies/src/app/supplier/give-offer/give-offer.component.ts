import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OrderDto } from '../DTOs/order-dto';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-give-offer',
  templateUrl: './give-offer.component.html',
  styleUrls: ['./give-offer.component.css']
})
export class GiveOfferComponent implements OnInit {

  public orders : OrderDto[] = [];
  public filteredOrders : OrderDto[] = [];

  public selectedStatuses = new FormControl();
  public statuses : string[] = ["WAITING OFFERS", "PROCESSED", "WAITING ON THE WINNER OFFER"];

  public displayedColumns = ["Status", "Deadline", "Medicines","Pharmacy" ,"Details", "Offer"];

  constructor(private supplierService : SupplierService, private _snackBar: MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    this.supplierService.getAllOrders().subscribe(
      (val) =>{ this.orders = val; 
                this.filteredOrders = this.orders;
                for(let order of this.orders) {
                  if (!this.statuses.some(s => s == order.state)) {
                    this.statuses.push(order.state);
                  }
                }  
              }
    )
  }

  filter() {
    this.filteredOrders = [];
    let selected : string[] = this.selectedStatuses.value;
    if (selected.length == 0) this.filteredOrders = this.orders;
    else {
      for(let order of this.orders) {
        if(selected.some(s => s == order.state)) {
          this.filteredOrders.push(order);
        }
      }
    }
  }

  viewDetails(id : number) {   
      this.router.navigate(['supplier/medicine/' + id]);
    
  }
  giveOffer(id : number){
    this.router.navigate(['supplier/add-offer/' + id]);
  }
}
