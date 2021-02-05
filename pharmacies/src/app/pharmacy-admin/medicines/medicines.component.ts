import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MedicineInPharmacyDTO } from '../DTOs/medicine-in-pharmacy-dto';
import { SearchMedicineDTO } from '../DTOs/search-medicine-dto';
import { MedicineService } from '../service/medicine.service';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  displayedColumns: string[] = ['Code', 'Name', 'Type', 'Manufacturer', 'Quantity', 'Delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  medicines : MedicineInPharmacyDTO[] = [];
  dataSource = new MatTableDataSource<MedicineInPharmacyDTO>(this.medicines);
  public selectedTypes = new FormControl();
  types : string [] = [];

  code : string = "";
  name : string = "";
  manufacturer : string = "";
  minValue : number = 0;
  maxValue : number = 0;
  options: Options = {
    floor: 0,
    ceil: 10,
    step: 1
  };
  
  constructor(private medicineService : MedicineService, private pharmacyService : PharmacyService, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.medicineService.getAllOffered().subscribe(
      (val) => {this.medicines = val; this.dataSource.data = this.medicines; this.dataSource.paginator = this.paginator;
        for (let medicine of this.medicines)
          if(!this.types.some(t => t == medicine.type))
            this.types.push(medicine.type);
          this.options = {
            floor: 0,
            ceil: this.calculateMaxQuantity(),
            step: 1
          };},
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  delete(id : number) {
    this.pharmacyService.deleteMedicine(id).subscribe(
      (val) => {this.openSnackBar("Medicine successfully deleted!", "Okay"); this.medicineService.getAllOffered().subscribe(
        (val) => {this.medicines = val; this.dataSource.data = this.medicines; this.dataSource.paginator = this.paginator;
          for (let medicine of this.medicines)
            if(!this.types.some(t => t == medicine.type))
              this.types.push(medicine.type);
            this.filter();},
        error => this.openSnackBar(error.error.message, "Okay")
      )},
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  search() {
    this.medicineService.search(new SearchMedicineDTO(this.code, this.name, this.manufacturer)).subscribe(
      (val) => {this.medicines = val; this.dataSource.data = this.medicines; this.filter();},
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  filter() {
    let display = [];
    let data1 = this.filterByType();
    let data2 = this.filterByQuantity();
    for(let medicine of this.medicines)
      if(data1.some(p => p.id == medicine.id) && data2.some(p => p.id == medicine.id))
        display.push(medicine);
    this.dataSource.data = display;
  }

  filterByType() {
    if (this.selectedTypes.value == null) {this.dataSource.data = this.medicines; return this.medicines; }
    let data = [];
    let types : string[] = this.selectedTypes.value;
    if (types.length == 0) {this.dataSource.data = this.medicines; return this.medicines; }
    for(let medicine of this.medicines) {
      if (types.some(t => t == medicine.type)) {
        data.push(medicine);
      }
    }
    return data;
  }

  filterByQuantity() {
    let medicines : MedicineInPharmacyDTO[] = [];
    for (let m of this.medicines)
      if (m.quantity >= this.minValue && m.quantity <= this.maxValue)
        medicines.push(m);
    return medicines;
  }

  calculateMaxQuantity() {
    let max = 0;
    for(let medicine of this.medicines) {
      if(medicine.quantity > max) {
        max = medicine.quantity
      }
    }
    return max;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
