import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppWeekDTO } from '../../pharmacist/DTOs/app-week-dto';
import { AppMonthDTO } from '../../pharmacist/DTOs/app-month-dto';
import { AppYearDTO } from '../../pharmacist/DTOs/app-year-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DermService } from '../service/derm.service';
import { PharmAppDTO } from '../../pharmacist/DTOs/pharm-app-dto';
import { DermPharmacyDTO } from '../DTOs/derm-pharmacy-dto';
import { CurrentlyHasAppointmentDTO } from 'src/app/pharmacist/DTOs/currently-free-dto';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  timeSpan = "w";
  monthNames : string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  startDate : Date = new Date();
  endDate : Date = new Date();
  currentSpan : string = "";

  startMonth : number = 0;
  startYear : number = 0;

  week : AppWeekDTO;
  month : AppMonthDTO;
  year : AppYearDTO;

  chosenAppointmentDTO : PharmAppDTO;
  isChosen = false;
  isValid = false;

  appData : PharmAppDTO[] = [];
  displayedColumns: string[] = ['startTime', 'durationInMinutes', 'patientName'];

  chosenPharmacyDTO : DermPharmacyDTO;
  pharmData : DermPharmacyDTO[] = [];
  displayedColumns2: string[] = ['name'];
  pharmChosen = false;
  alreadyStarted = false;

  av : CurrentlyHasAppointmentDTO;

  constructor(private dermService : DermService, private _snackBar: MatSnackBar, public router: Router) { 
    this.endDate.setDate(this.startDate.getDate() + 7);
    this.currentSpan = this.getFormattedDate(this.startDate, this.endDate);
  }

  ngOnInit(): void {
    this.dermService.getAllPharmacies().subscribe(
      data => this.pharmData = data
    );
    var a = "";
    a.toUpperCase();
  }

  choosePharmacy(element){
    this.chosenPharmacyDTO = element;
    console.log(this.endDate);
    console.log(this.currentSpan);

    this.startDate = new Date();
    this.endDate.setDate(this.startDate.getDate() + 7);
    this.currentSpan = this.getFormattedDate(this.startDate, this.endDate);
    this.week = new AppWeekDTO(this.startDate, this.endDate);
    this.dermService.getByWeek(this.week, this.chosenPharmacyDTO.pharmacyId).subscribe(
      data => {
        this.appData = data;
      }
    );
    this.pharmChosen = true;
    this.timeSpan = "w";
    this.isChosen = false;
    this.isValid = false;
    this.alreadyStarted = false;
  }

  setTimeSpan(ts : string){
    this.isChosen = false;
    this.isValid = false;
    this.alreadyStarted = false;
    this.timeSpan = ts;
    if(ts === "w") this.setWeek();
    if(ts === "m") this.setMonth();
    if(ts === "y") this.setYear();
  }

  setWeek(){
    this.startDate = new Date();
    this.endDate.setDate(this.startDate.getDate() + 7);
    this.currentSpan = this.getFormattedDate(this.startDate, this.endDate);

    this.week = new AppWeekDTO(this.startDate, this.endDate);
    this.dermService.getByWeek(this.week, this.chosenPharmacyDTO.pharmacyId).subscribe(
      data => {
        this.appData = data;
      }
    );
  }

  setMonth(){
    this.startDate = new Date();
    this.startMonth = this.startDate.getMonth();
    this.startYear = this.startDate.getFullYear();
    this.currentSpan = this.monthNames[this.startDate.getMonth()] + " " + this.startYear;

    this.month = new AppMonthDTO(this.startYear, this.startMonth + 1);
    this.dermService.getByMonth(this.month, this.chosenPharmacyDTO.pharmacyId).subscribe(
      data => {
        this.appData = data;
      }
    );
  }

  setYear(){
    this.startDate = new Date();
    this.startYear = this.startDate.getFullYear();
    this.currentSpan = this.startDate.getFullYear().toString();

    this.year = new AppYearDTO(this.startYear);
    this.dermService.getByYear(this.year, this.chosenPharmacyDTO.pharmacyId).subscribe(
      data => {
        this.appData = data;
      }
    );
  }

  next(){
    this.isChosen = false;
    this.isValid = false;
    this.alreadyStarted = false;
    if(this.timeSpan === "w") this.addWeek();
    if(this.timeSpan === "m") this.addMonth();
    if(this.timeSpan === "y") this.addYear();
  }

  previous(){
    this.isChosen = false;
    this.isValid = false;
    this.alreadyStarted = false;
    if(this.timeSpan === "w") this.minusWeek();
    if(this.timeSpan === "m") this.minusMonth();
    if(this.timeSpan === "y") this.minusYear();
  }

  addWeek(){
    this.startDate.setDate(this.startDate.getDate() + 7);
    this.endDate.setDate(this.startDate.getDate() + 7);
    this.currentSpan = this.getFormattedDate(this.startDate, this.endDate);

    this.week = new AppWeekDTO(this.startDate, this.endDate);
    this.dermService.getByWeek(this.week, this.chosenPharmacyDTO.pharmacyId).subscribe(
      data => {
        this.appData = data;
      }
    );
  }

  addMonth(){
    if(this.startMonth != 11){
      this.startMonth = this.startMonth + 1;
      this.currentSpan = this.monthNames[this.startMonth] + " " + this.startYear;
    } else {
      this.startMonth = 0;
      this.startYear = this.startYear + 1;
      this.currentSpan = this.monthNames[this.startMonth] + " " + this.startYear;
    }

    this.month = new AppMonthDTO(this.startYear, this.startMonth + 1);
    this.dermService.getByMonth(this.month, this.chosenPharmacyDTO.pharmacyId).subscribe(
      data => {
        this.appData = data;
      }
    );
  }

  addYear(){
    this.startYear = this.startYear + 1;
    this.currentSpan = this.startYear.toString();

    this.year = new AppYearDTO(this.startYear);
    this.dermService.getByYear(this.year, this.chosenPharmacyDTO.pharmacyId).subscribe(
      data => {
        this.appData = data;
      }
    );
  }

  minusWeek(){
    var newEndDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate());
    this.endDate = newEndDate;
    this.startDate.setDate(this.startDate.getDate() - 7);
    this.currentSpan = this.getFormattedDate(this.startDate, this.endDate);

    this.week = new AppWeekDTO(this.startDate, this.endDate);
    this.dermService.getByWeek(this.week, this.chosenPharmacyDTO.pharmacyId).subscribe(
      data => {
        this.appData = data;
      }
    );
  }

  minusMonth(){
    if(this.startMonth != 0){
      this.startMonth = this.startMonth - 1;
      this.currentSpan = this.monthNames[this.startMonth] + " " + this.startYear;
    } else {
      this.startMonth = 11;
      this.startYear = this.startYear - 1;
      this.currentSpan = this.monthNames[this.startMonth] + " " + this.startYear;
    }

    this.month = new AppMonthDTO(this.startYear, this.startMonth + 1);
    this.dermService.getByMonth(this.month, this.chosenPharmacyDTO.pharmacyId).subscribe(
      data => {
        this.appData = data;
      }
    );
  }

  minusYear(){
    this.startYear = this.startYear - 1;
    this.currentSpan = this.startYear.toString();

    this.year = new AppYearDTO(this.startYear);
    this.dermService.getByYear(this.year, this.chosenPharmacyDTO.pharmacyId).subscribe(
      data => {
        this.appData = data;
      }
    );
  }

  start(element){
    this.isChosen = false;
    this.isValid = false;
    this.alreadyStarted = false;
    if(element.patientName != ""){
      this.chosenAppointmentDTO = element;
      var splitted = this.chosenAppointmentDTO.startTime.split(", ", 2);
      splitted = splitted[1].split(".", 3);
      var date = new Date(Number(splitted[2]), Number(splitted[1]) - 1, Number(splitted[0]));
      var today = new Date();
      if(date >= today){
        this.isChosen = true;
        this.isValid = true;
      }
    }
  }

  startButton(){
    this.dermService.getCurrentlyAvailable().subscribe(
      data => {
        this.av = data;
        if(!this.av.hasAppointment){
          this.dermService.chosenAppointmnetDto = this.chosenAppointmentDTO.appointmentId;
          this.router.navigate(['dermatologist/report']);
        }
        else {
          this.openSnackBar("You have already started another appointment.", "Okay");
          this.alreadyStarted = true;
        }
      }
    );
  }

  goToStarted(){
    if(this.dermService.chosenAppointmnetDto != 0){
      this.router.navigate(['dermatologist/report']);
    }
    else {
      this.openSnackBar("You can only end current appointment.", "Okay");
    }
  }

  endCurrent(){
    this.dermService.endCurrent().subscribe(
      data => {
        console.log("Appointment ended.");
        if(this.dermService.chosenAppointmnetDto != 0){
          this.dermService.chosenAppointmnetDto = 0;
        }
      }
    );
    this.alreadyStarted = false;
  }

  cancel(){
    this.isChosen = false;
    this.isValid = false;
    this.alreadyStarted = false;
  }

  notPresent(){
    this.dermService.getCurrentlyAvailable().subscribe(
      data => {
        this.av = data;
        if(!this.av.hasAppointment){
          this.isChosen = false;
          this.isValid = false;
          this.dermService.chosenAppointmnetDto = this.chosenAppointmentDTO.appointmentId;
          this.dermService.notPresent().subscribe(
            data => {
              console.log("Gotov pregled.");
              this.currentSpan = "w";
              this.startDate = new Date();
              this.endDate.setDate(this.startDate.getDate() + 7);
              this.currentSpan = this.getFormattedDate(this.startDate, this.endDate);

              this.week = new AppWeekDTO(this.startDate, this.endDate);
              this.dermService.getByWeek(this.week, this.chosenPharmacyDTO.pharmacyId).subscribe(
                data => {
                  this.appData = data;
                }
              );
            }
          );
        }
        else {
          this.openSnackBar("You have already started another appointment.", "Okay");
          this.alreadyStarted = true;
        }
      }
    );
    

  }

  getFormattedDate(startDate : Date, endDate : Date) : string{
    var dd = this.startDate.getDate();
    var mm = this.monthNames[this.startDate.getMonth()];
    var y = this.startDate.getFullYear();

    var dd1 = this.endDate.getDate();
    var mm1 = this.monthNames[this.endDate.getMonth()];
    var y1 = this.endDate.getFullYear();

    return dd + '. ' + mm + ' ' + y + ' - ' + dd1 + '. ' + mm1 + ' ' + y1;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }
}
