import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferUpdate } from '../DTOs/offer-update';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  public minDate : Date = new Date();
  public selectedDate = new FormControl(new Date());
  public minTime : string = new Date(this.selectedDate.value).getDate() == this.minDate.getDate()
                         && new Date(this.selectedDate.value).getMonth() == this.minDate.getMonth()  
                         && new Date(this.selectedDate.value).getFullYear() == this.minDate.getFullYear()
                          ? new Date().getHours() + ":" + new Date().getMinutes() : "00:00";
  public selectedTime = this.minTime;

  public totalPrice : number;

  constructor(private supplierService : SupplierService,  private route : ActivatedRoute,private snackBar : MatSnackBar, private router : Router) { }

  ngOnInit(): void {
  }
  checkMinTime() {
    this.minTime = new Date(this.selectedDate.value).getDate() == this.minDate.getDate()
    && new Date(this.selectedDate.value).getMonth() == this.minDate.getMonth()  
    && new Date(this.selectedDate.value).getFullYear() == this.minDate.getFullYear()
     ? new Date().getHours() + ":" + new Date().getMinutes() : "00:00";
    this.selectedTime = this.minTime;
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
  update() {
    let date = new Date(this.selectedDate.value);
    date.setHours(Number(this.selectedTime.substr(0, 2)) + 1);
    date.setMinutes(Number(this.selectedTime.substr(3, 2)));
    let offer = new OfferUpdate(Number(this.route.snapshot.paramMap.get('idOffer')),  date, this.totalPrice);
    this.supplierService.updateOffer(offer).subscribe(
      (val) => {this.openSnackBar("Offer successfully updated!", "Okay"); },
      error => this.openSnackBar(error.error, "Okay")
    )
  
}

}
