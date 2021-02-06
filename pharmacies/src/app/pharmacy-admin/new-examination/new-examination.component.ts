import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DermatologistDTO } from '../DTOs/dermatologist-dto';
import { PredefinedExaminationDTO } from '../DTOs/predefined-examination-dto';
import { DermatologistService } from '../service/dermatologist.service';

@Component({
  selector: 'app-new-examination',
  templateUrl: './new-examination.component.html',
  styleUrls: ['./new-examination.component.css']
})
export class NewExaminationComponent implements OnInit {

  constructor(private dermatologistService : DermatologistService, private snackBar : MatSnackBar) { }

  dermatologists : DermatologistDTO[] = [];
  public selectedDermatologist = new FormControl();

  duration = "";
  price = "";
  
  public minDate : Date = new Date();
  public selectedDate = new FormControl(new Date());
  public minTime : string = new Date(this.selectedDate.value).getDate() == this.minDate.getDate()
                         && new Date(this.selectedDate.value).getMonth() == this.minDate.getMonth()  
                         && new Date(this.selectedDate.value).getFullYear() == this.minDate.getFullYear()
                          ? new Date().getHours() + ":" + new Date().getMinutes() : "00:00";
  public selectedTime = this.minTime;

  ngOnInit(): void {
    this.dermatologistService.getDermatologists().subscribe(
      (val) => this.dermatologists = val
    )
  }

  checkMinTime() {
    this.minTime = new Date(this.selectedDate.value).getDate() == this.minDate.getDate()
    && new Date(this.selectedDate.value).getMonth() == this.minDate.getMonth()  
    && new Date(this.selectedDate.value).getFullYear() == this.minDate.getFullYear()
     ? new Date().getHours() + ":" + new Date().getMinutes() : "00:00";
    this.selectedTime = this.minTime;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  create() {
    let hours = Number(this.selectedTime.substr(0, 2)) + 1;
    let minutes = Number(this.selectedTime.substr(3, 2));
    let dateTime = new Date(this.selectedDate.value);
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);
    this.dermatologistService.createExamination(new PredefinedExaminationDTO(this.selectedDermatologist.value, dateTime, Number(this.price), Number(this.duration))).subscribe(
      (val) => this.openSnackBar("New examination successfully created!", "Okay"),
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }
}
