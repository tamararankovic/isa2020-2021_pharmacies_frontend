import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferDTO } from '../DTOs/offer-dto';
import { OrderDTO } from '../DTOs/order-dto';
import { OrderWinnerDTO } from '../DTOs/order-winner-dto';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private orderService : OrderService, private router : Router, private route : ActivatedRoute, private snackBar : MatSnackBar) { }

  public order : OrderDTO = new OrderDTO(0, [], new Date(), false, "", false, [], new OfferDTO(0, "", 0));

  public displayedColumns: string[] = ['Code', 'Name', 'Type', 'Manufacturer', 'Quantity'];
  public displayedColumns2: string[] = ['Supplier', 'Price'];
  public displayedColumns3: string[] = ['Supplier', 'Price'];

  public winner : OfferDTO[] = [];

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.orderService.getAll().subscribe(
      (val) => { this.order = val.find(v => v.id == Number(this.route.snapshot.paramMap.get('id'))); if (this.order.editable) this.router.navigate(['pharmacy-admin/edit-order/' + this.route.snapshot.paramMap.get('id')]); if (this.order.canChooseWinner) this.displayedColumns2 = ['Supplier', 'Price', 'Choose']; this.winner.push(this.order.winningOffer)}
    )
  }

  chooseWinner(offerId : number) {
    this.orderService.chooseWinner(new OrderWinnerDTO(this.order.id, offerId)).subscribe(
      (val) => {this.openSnackBar("Winner successfully selected!", "Okay"); this.router.navigate(['pharmacy-admin/orders'])},
      error => this.openSnackBar(error.error.message, "Okay")
      )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
