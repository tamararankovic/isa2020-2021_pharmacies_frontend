import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { DermatologistDTO } from '../DTOs/dermatologist-dto';
import { DermatologistService } from '../service/dermatologist.service';

@Component({
  selector: 'app-dermatologists',
  templateUrl: './dermatologists.component.html',
  styleUrls: ['./dermatologists.component.css']
})
export class DermatologistsComponent implements OnInit {

  constructor(private dermService : DermatologistService, private router : Router, private snackBar : MatSnackBar) { }

  public dermatologists : DermatologistDTO[] = [];
  public displayedColumns : string[] = [];
  public displayDermatologists : DermatologistDTO[] = [];
  public selectedPharmacies = new FormControl();
  public pharmacies : string[] = [];

  public value : string = "";

  public displayAddNewButton = false;

  //rating slider
  minValue: number = 0;
  maxValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 5,
    step: 0.1
  };

  ngOnInit(): void {
    this.get();
    if (this.router.url.toLowerCase().includes(Constants.patientRole.toLowerCase()))
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacies"];
    else if (this.router.url.toLowerCase().includes(Constants.pharmacyAdminRole.toLowerCase().replace("_", "-"))) {
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacies", "Delete"];
      this.displayAddNewButton = true;
    }
  }

  delete(id : number) {
    this.dermService.delete(id).subscribe(
      (val) => {this.get(); this.openSnackBar("Successfully deleted dermatologist!", "Okay");},
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  get() {
    this.dermService.getDermatologists().subscribe(
      (val) => {this.dermatologists = val
                this.displayDermatologists = this.dermatologists;
                for (let dermatologist of this.dermatologists)
                  for (let pharmacy of dermatologist.pharmacies)
                    if(!this.pharmacies.some(p => p == pharmacy))
                      this.pharmacies.push(pharmacy);
                this.filter();
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  search() {
    if (this.value.length == 0) this.get();
    else {
      this.dermService.search(this.value).subscribe(
        (val) => {this.dermatologists = val;
                  this.displayDermatologists = this.dermatologists;
                  this.filter()},
        error => this.openSnackBar(error.error.message, "Okay")
      );
    }
  }

  filter() {
    this.displayDermatologists = [];
    let byPharmacy = this.filterByPharmacy();
    let byRating = this.filterByRating();
    for(let dermatologist of this.dermatologists)
      if(byPharmacy.some(p => p.id == dermatologist.id) && byRating.some(p => p.id == dermatologist.id))
        this.displayDermatologists.push(dermatologist);
  }

  filterByPharmacy() : DermatologistDTO[] {
    if (this.selectedPharmacies.value == null) return this.dermatologists;
    let selected : string[] = this.selectedPharmacies.value;
    let dermatologists : DermatologistDTO[] = [];
    for (let dermatologist of this.dermatologists)
      for (let pharmacy of dermatologist.pharmacies)
        if (selected.some(s => s == pharmacy))
          dermatologists.push(dermatologist);
    return dermatologists;
  }

  filterByRating() : DermatologistDTO[] {
    let dermatologists : DermatologistDTO[] = [];
    for (let dermatologist of this.dermatologists)
      if (dermatologist.avgRating >= this.minValue && dermatologist.avgRating <= this.maxValue)
        dermatologists.push(dermatologist);
    return dermatologists;
  }

  create() {
    this.router.navigate(["pharmacy-admin/new-dermatologist"]);
  }
}
