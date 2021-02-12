import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { PharmacistDTO } from '../DTOs/pharmacist-dto';
import { PharmacistService } from '../service/pharmacist.service';
import { Options } from '@angular-slider/ngx-slider';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pharmacists',
  templateUrl: './pharmacists.component.html',
  styleUrls: ['./pharmacists.component.css']
})
export class PharmacistsComponent implements OnInit {

  constructor(private pharmService : PharmacistService, private router : Router, private snackBar: MatSnackBar) { }

  public pharmacists : PharmacistDTO[] = [];
  public displayedColumns : string[] = [];
  public pharmacies : string[] = [];
  public displayPharmacists : PharmacistDTO[] = [];
  public selectedPharmacies = new FormControl();

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
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacy"];
    else if (this.router.url.toLowerCase().includes(Constants.pharmacyAdminRole.toLowerCase().replace("_", "-"))) {
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacy", "Delete"];
      this.displayAddNewButton = true;
    }
  }

  delete(id : number) {
    this.pharmService.delete(id).subscribe(
      (val) => {this.get(); this.openSnackBar("Successfully deleted pharmacist!", "Okay");},
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  get() {
    this.pharmService.getPharmacists().subscribe(
      (val) => {this.pharmacists = val;
                this.displayPharmacists = this.pharmacists;
                for (let pharmacist of this.pharmacists)
                  if(!this.pharmacies.some(p => p == pharmacist.pharmacy))
                    this.pharmacies.push(pharmacist.pharmacy);
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
      this.pharmService.search(this.value).subscribe(
        (val) => {this.pharmacists = val;
                  this.displayPharmacists = this.pharmacists;
                  this.filter()},
        error => this.openSnackBar(error.error.message, "Okay")
      );
    }
  }

  filter() {
    this.displayPharmacists = [];
    let byPharmacy = this.filterByPharmacy();
    let byRating = this.filterByRating();
    for(let pharmacist of this.pharmacists)
      if(byPharmacy.some(p => p.id == pharmacist.id) && byRating.some(p => p.id == pharmacist.id))
        this.displayPharmacists.push(pharmacist);
  }

  filterByPharmacy() : PharmacistDTO[] {
    if (this.selectedPharmacies.value == null) return this.pharmacists;
    let selected : string[] = this.selectedPharmacies.value;
    let pharmacists : PharmacistDTO[] = [];
    for (let pharmacist of this.pharmacists)
      if (selected.some(s => s == pharmacist.pharmacy))
        pharmacists.push(pharmacist);
    return pharmacists;
  }

  filterByRating() : PharmacistDTO[] {
    let pharmacists : PharmacistDTO[] = [];
    for (let pharmacist of this.pharmacists)
      if (pharmacist.avgRating >= this.minValue && pharmacist.avgRating <= this.maxValue)
        pharmacists.push(pharmacist);
    return pharmacists;
  }

  create() {
    this.router.navigate(["pharmacy-admin/new-pharmacist"]);
  }
}
