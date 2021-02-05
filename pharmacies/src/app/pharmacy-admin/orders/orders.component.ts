import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDTO } from '../DTOs/order-dto';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders : OrderDTO[] = [];
  public filteredOrders : OrderDTO[] = [];

  public selectedStatuses = new FormControl();
  public statuses : string[] = ["WAITING OFFERS", "PROCESSED", "WAITING ON THE WINNER OFFER"];

  public displayedColumns = ["Status", "Deadline", "Medicines", "Details"];

  constructor(private orderService : OrderService, private router : Router) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(
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
    let order = this.orders.find(o => o.id == id);
    if (order.editable) {
      this.router.navigate(['pharmacy-admin/edit-order/' + id]);
    } else {
      this.router.navigate(['pharmacy-admin/order/' + id]);
    }
  }

}
