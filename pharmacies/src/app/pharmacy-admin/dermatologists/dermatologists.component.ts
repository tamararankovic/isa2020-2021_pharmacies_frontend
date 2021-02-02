import { Component, OnInit } from '@angular/core';
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

  public value : string = "";

  ngOnInit(): void {
    this.get();
    if (this.router.url.toLowerCase().includes(Constants.patientRole.toLowerCase()))
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacies"];
    else if (this.router.url.toLowerCase().includes(Constants.pharmacyAdminRole.toLowerCase().replace("_", "-")))
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacies", "Delete"];
  }

  delete(id : number) {
    this.dermService.delete(id).subscribe(
      (val) => {this.get(); this.openSnackBar("Successfully deleted dermatologist!", "Okay");},
      error => this.openSnackBar(error.error, "Okay")
    )
  }

  get() {
    this.dermService.getDermatologists().subscribe(
      (val) => this.dermatologists = val
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
        (val) => this.dermatologists = val,
        error => this.openSnackBar(error.error, "Okay")
      );
    }
  }
}
