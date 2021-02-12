import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemPriceDto } from '../DTOs/item-price-dto';
import { PriceListDTO } from '../DTOs/price-list-dto';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  constructor(private pharmacyService : PharmacyService, private snackBar : MatSnackBar) { }

  public priceList : PriceListDTO = new PriceListDTO([], new ItemPriceDto(0, "", 0, false), new ItemPriceDto(0, "", 0, false), new Date(), 0);
  
  ngOnInit(): void {
    this.pharmacyService.getPriceList().subscribe(
      (val) => this.priceList = val,
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
