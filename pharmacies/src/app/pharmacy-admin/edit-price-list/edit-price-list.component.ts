import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ItemPriceDto } from '../DTOs/item-price-dto';
import { PriceListDTO } from '../DTOs/price-list-dto';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-edit-price-list',
  templateUrl: './edit-price-list.component.html',
  styleUrls: ['./edit-price-list.component.css']
})
export class EditPriceListComponent implements OnInit {

  displayedColumns: string[] = ['Select', 'Name', 'Price'];

  public priceList : PriceListDTO = new PriceListDTO([], new ItemPriceDto(0, "", 0, false), new ItemPriceDto(0, "", 0, false), new Date(), 0);

  dataSource = new MatTableDataSource<ItemPriceDto>(this.priceList.medicinePrices);
  dataSource2 = new MatTableDataSource<ItemPriceDto>([this.priceList.dermatologistAppointmentPrice, this.priceList.pharmacistAppointmentPrice]);
  selection = new SelectionModel<ItemPriceDto>(true, []);
  selection2 = new SelectionModel<ItemPriceDto>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public minDate : Date = new Date();
  public selectedDate = new FormControl(new Date());

  constructor(private pharmacyService : PharmacyService, private snackBar : MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    this.pharmacyService.getPriceList().subscribe(
      (val) => {this.priceList = val; this.dataSource.data = this.priceList.medicinePrices; this.dataSource.paginator = this.paginator; this.priceList.dermatologistAppointmentPrice.itemName = "Examination with dermatologists"; this.priceList.pharmacistAppointmentPrice.itemName = "Consultations with pharmacists"; this.dataSource2.data = [this.priceList.dermatologistAppointmentPrice, this.priceList.pharmacistAppointmentPrice]; },
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  save() {
    let valid = true;
    for(let data of this.selection.selected) {
      if (data.price == undefined || Number(data.price) > 1000 || Number(data.price) < 0) {
        this.openSnackBar("All prices should be set and be between 1 and 99999", "Okay");
        valid = false;
        break;
      }
    }
    if(valid) {
      this.priceList.medicinePrices = this.selection.selected;

    if (this.selection2.selected.length == 0) {
      this.priceList.dermatologistAppointmentPrice.undefined = true;
      this.priceList.pharmacistAppointmentPrice.undefined = true;
    } else if (this.selection2.selected.length == 2) {
      this.priceList.dermatologistAppointmentPrice.undefined = false;
      this.priceList.dermatologistAppointmentPrice.price = this.selection2.selected[0].price;
      this.priceList.pharmacistAppointmentPrice.undefined = false;
      this.priceList.pharmacistAppointmentPrice.price = this.selection2.selected[1].price;
    } else if (this.selection2.selected[0].itemName == "Consultations with pharmacists") {
      this.priceList.dermatologistAppointmentPrice.undefined = true;
      this.priceList.pharmacistAppointmentPrice.undefined = false;
      this.priceList.pharmacistAppointmentPrice.price = this.selection2.selected[0].price;
    } else {
      this.priceList.dermatologistAppointmentPrice.undefined = false;
      this.priceList.pharmacistAppointmentPrice.undefined = true;
      this.priceList.dermatologistAppointmentPrice.price = this.selection2.selected[0].price;
    }
    this.priceList.startDate = this.selectedDate.value;
    this.pharmacyService.editPriceList(this.priceList).subscribe(
      (val) => { this.openSnackBar("Price list successfully edited!", "Okay"); this.router.navigate(['pharmacy-admin/price-list'])},
      error => this.openSnackBar(error.error.message, "Okay")
    )
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
