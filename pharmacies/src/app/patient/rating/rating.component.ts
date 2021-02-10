import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StarRatingComponent } from 'ng-starrating';
import { DoctorRatingDto } from '../DTOs/doctor-rating-dto';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  selectedValue1: number = 0;
  selectedValue2: number = 0;
  selectedValue3: number = 0;
  public pharms : DoctorRatingDto[];
  public derms : DoctorRatingDto[];
  public meds : DoctorRatingDto[];
  public pharmacy : DoctorRatingDto[];
  public displayedColumns1 = ["name","ratings","action","action1"];
  public rate = false;
  public rate1 = false;
  public rate2 = false;
  public rate3 = false;
  public rate4 = false;

  public show = false;
  public show1 = true;
  public show2 = false;
  public show3 = true;
  public show4 = true;
  public show5 = false;
  public show6 = true;
  public show7 = false;
  
  constructor(private patientService :PatientService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.patientService.getDermForRating().subscribe(data => this.derms = data);
    this.patientService.getPharmForRating().subscribe(data => this.pharms = data);
    this.patientService.getMedForRating().subscribe(data => this.meds = data);
    this.patientService.getPharmacyForRating().subscribe(data => this.pharmacy = data);
  }

  rateDerm(){
    this.rate = true;
    this.show = true;
    this.show1 = false;
  }

  ratePharm(){
    this.rate1 = true;
    this.show2 = true;
    this.show3 = false;
  }

  rateMed(){
    this.rate2 = true;
    this.show5 = true;
    this.show4 = false;
  }

  ratePharmacy(){
    this.rate3 = true;
    this.show7 = true;
    this.show6 = false;
  }

  saveDerm(element){
    element.rating = this.selectedValue;
    if(this.selectedValue == 0){
      this.show1 = true;
      this.rate = false;
      this.show = false;
      this.openSnackBar("Rating can not be zero.","Okay");
    }
    else{
      this.selectedValue = 0;
      this.rate = false;
      this.show = false;
      this.patientService.saveDermRating(element).subscribe();
      this.openSnackBar("You have successfully rated dermatologist " + element.fullName,"Okay");
    }
    
  }
  savePharm(element){
    element.rating = this.selectedValue1;
    if(this.selectedValue1 == 0){
      this.show3 = true;
      this.rate1 = false;
      this.show2 = false;
      this.openSnackBar("Rating can not be zero.","Okay");
    }
    else{    
      this.rate1 = false;
      this.show2 = false;
      this.selectedValue1 = 0;
      this.patientService.savePharmRating(element).subscribe();
      this.openSnackBar("You have successfully rated pharmacist " + element.fullName,"Okay");
    }
  }
  saveMed(element){
    element.rating = this.selectedValue2;
    if(this.selectedValue2 == 0){
      this.show4 = true;
      this.rate2 = false;
      this.show5 = false;
      this.openSnackBar("Rating can not be zero.","Okay");
    }
    else{
      this.selectedValue2 = 0;
      this.rate2 = false;
      this.show5 = false;
      this.patientService.saveMedRating(element).subscribe();
      this.openSnackBar("You have successfully rated medicine " + element.fullName,"Okay");
    }
    
  }
  savePharmacy(element){
    element.rating = this.selectedValue3;
    if(this.selectedValue3 == 0){
      this.show6 = true;
      this.rate3 = false;
      this.show7 = false;
      this.openSnackBar("Rating can not be zero.","Okay");
    }
    else{
      this.selectedValue2 = 0;
      this.rate3 = false;
      this.show7 = false;
      this.patientService.savePharmacyRating(element).subscribe();
      this.openSnackBar("You have successfully rated medicine " + element.fullName,"Okay");
    }
    
  }


  countStarDerm(star) {
      this.selectedValue = star;
    }

  countStarPharm(star) {
      this.selectedValue1 = star;
    }
    countStarMed(star) {
      this.selectedValue2 = star;
    }
    countStarPharmacy(star){
      this.selectedValue3 = star;
    }

  addClass(star) {
    let ab = "";
    for (let i = 0; i < star; i++) {
      ab = "starId" + i;
      document.getElementById(ab).classList.add("selected");
    }
  }
  removeClass(star) {
    let ab = "";
    for (let i = star-1; i >= this.selectedValue; i--) {
      ab = "starId" + i;
      document.getElementById(ab).classList.remove("selected");
    }
  }

  addClass1(star) {
    let ab = "";
    for (let i = 0; i < star; i++) {
      ab = "starId1" + i;
      document.getElementById(ab).classList.add("selected1");
    }
  }
  removeClass1(star) {
    let ab = "";
    for (let i = star-1; i >= this.selectedValue1; i--) {
      ab = "starId1" + i;
      document.getElementById(ab).classList.remove("selected1");
    }
  }

  addClass2(star) {
    let ab = "";
    for (let i = 0; i < star; i++) {
      ab = "starId2" + i;
      document.getElementById(ab).classList.add("selected2");
    }
  }
  removeClass2(star) {
    let ab = "";
    for (let i = star-1; i >= this.selectedValue2; i--) {
      ab = "starId2" + i;
      document.getElementById(ab).classList.remove("selected2");
    }
  }

  addClass3(star) {
    let ab = "";
    for (let i = 0; i < star; i++) {
      ab = "starId3" + i;
      document.getElementById(ab).classList.add("selected3");
    }
  }
  removeClass3(star) {
    let ab = "";
    for (let i = star-1; i >= this.selectedValue3; i--) {
      ab = "starId3" + i;
      document.getElementById(ab).classList.remove("selected3");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
