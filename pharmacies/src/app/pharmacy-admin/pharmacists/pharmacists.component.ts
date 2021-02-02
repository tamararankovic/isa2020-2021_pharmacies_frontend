import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { PharmacistDTO } from '../DTOs/pharmacist-dto';
import { PharmacistService } from '../service/pharmacist.service';

@Component({
  selector: 'app-pharmacists',
  templateUrl: './pharmacists.component.html',
  styleUrls: ['./pharmacists.component.css']
})
export class PharmacistsComponent implements OnInit {

  constructor(private pharmService : PharmacistService, private router : Router, private snackBar: MatSnackBar) { }

  public pharmacists : PharmacistDTO[] = [];
  public displayedColumns : string[] = [];

  public value : string = "";

  ngOnInit(): void {
    this.get();
    if (this.router.url.toLowerCase().includes(Constants.patientRole.toLowerCase()))
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacy"];
    else if (this.router.url.toLowerCase().includes(Constants.pharmacyAdminRole.toLowerCase().replace("_", "-")))
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacy", "Delete"];
  }

  delete(id : number) {
    this.pharmService.delete(id).subscribe(
      (val) => {this.get(); this.openSnackBar("Successfully deleted pharmacist!", "Okay");},
      error => this.openSnackBar(error.error, "Okay")
    )
  }

  get() {
    this.pharmService.getPharmacists().subscribe(
      (val) => this.pharmacists = val
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
        (val) => this.pharmacists = val,
        error => this.openSnackBar(error.error, "Okay")
      );
    }
  }
}
