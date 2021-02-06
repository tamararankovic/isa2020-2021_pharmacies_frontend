import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferDTO } from '../DTOs/offer-dto';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

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

  create() {
      console.log(this.totalPrice);
      let date = new Date(this.selectedDate.value);
      date.setHours(Number(this.selectedTime.substr(0, 2)) + 1);
      date.setMinutes(Number(this.selectedTime.substr(3, 2)));
      let offer = new OfferDTO(Number(this.route.snapshot.paramMap.get('id')),date, this.totalPrice);
      console.log(date);
      this.supplierService.createOffer(offer).subscribe(
        (val) => {this.openSnackBar("Offer successfully created!", "Okay"); },
        error => this.openSnackBar(error.error, "Okay")
      )
    
  }
}
