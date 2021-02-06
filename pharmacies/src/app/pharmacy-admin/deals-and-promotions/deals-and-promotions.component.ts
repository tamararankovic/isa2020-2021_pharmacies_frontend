import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DealPromotionDTO } from '../DTOs/deal-promotion-dto';
import { PharmacyAdminService } from '../service/pharmacy-admin.service';

@Component({
  selector: 'app-deals-and-promotions',
  templateUrl: './deals-and-promotions.component.html',
  styleUrls: ['./deals-and-promotions.component.css']
})
export class DealsAndPromotionsComponent implements OnInit {

  constructor(private service : PharmacyAdminService, private snackBar : MatSnackBar) { }

  text : string = "";
  option : number = 3;

  minDate = new Date();
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  ngOnInit(): void {
  }

  send() {
    let year = new Date(this.endDate.value).getFullYear();
    let month = new Date(this.endDate.value).getMonth();
    let day = new Date(this.endDate.value).getDate();
    let end = new Date(year, month, day+1, 0, 0, 0);
    let dto : DealPromotionDTO = new DealPromotionDTO(this.text, this.option == 1 ? 1 : 0, new Date(this.startDate.value), end);
    this.service.sendDealPromotion(dto).subscribe(
      (val) => this.openSnackBar("Emails successfully sent to all subscribed users!", "Okay"),
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
