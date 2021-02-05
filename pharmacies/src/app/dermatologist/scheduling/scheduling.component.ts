import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppAvailableDTO } from '../../pharmacist/DTOs/app-available-dto';
import { ExistingAppDTO } from '../DTOs/existing-app-dto';
import { SaveAppDTO } from '../DTOs/save-app-dto';
import { DermService } from '../service/derm.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {

  appointmentDateTime : Date = new Date();
  price : number = 0;
  priceText = "";
  chosenSchedulingType = false;
  existingChosen = false;
  existingChosenDTO : ExistingAppDTO;
  displayedColumns: string[] = ['startDateTime', 'durationInMinutes', 'price'];
  existing = false; 
  ingredients : string[] = [ "M", "Dj"];
  dto : SaveAppDTO = new SaveAppDTO(this.dermService.appointmentId, this.price, this.appointmentDateTime);
  appAvailable : AppAvailableDTO;
  existingAppointmentsList : ExistingAppDTO[] = [];
  constructor(private dermService : DermService, private _snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
    if(this.dermService.appointmentId == 0){
      this.router.navigate(['']);
    }
  }

  checkIfAvailable(){
    console.log(this.appointmentDateTime);
    this.dto.startDateTime = this.appointmentDateTime;
    //this.dto.price = this.price;
    this.dermService.isAppointmentAvailable(this.dto).subscribe(
      data => {
        this.appAvailable = data;
        console.log(this.appAvailable);
        if(this.appAvailable.available){
          if(this.priceText == ""){
            this.openSnackBar("You have to enter price.", "Okay");
          }
          else if(isNaN(Number(this.priceText))){
            this.openSnackBar("Price must be number.", "Okay");
          }
          else if(Number(this.priceText) == 0){
            this.openSnackBar("Price cannot be 0.", "Okay");
          }
          else {
            this.price = Number(this.priceText);
            this.dto.price = this.price;
            this.dermService.saveAppointment(this.dto).subscribe(
              data => {
                console.log(data + "Appointment saved.");
                this.openSnackBar("Appointment is saved.", "Okay");
              }
            );
          }
        }
        else this.openSnackBar("Try another date and time. This appointment is not available.", "Okay");
      }
    );
  }

  existingAppointment(){
    this.dermService.getExistingAppointments(this.dermService.appointmentId).subscribe(
      data => {
        this.existingAppointmentsList = data;
        this.existing = true;
        this.chosenSchedulingType = true;
      }
    );
  }

  newAppointment(){
    this.existing = false;
    this.chosenSchedulingType = true;
  }

  chooseExisting(element){
    this.existingChosen = true;
    this.existingChosenDTO = element;
  }

  back(){
    this.chosenSchedulingType = false;
    this.existingChosen = false;
  }

  saveExistingAppointment(){
    this.dermService.saveExistingAppointment(this.dermService.appointmentId, this.existingChosenDTO.id).subscribe(
      data => {
        this.existingAppointment();
        this.openSnackBar("Appointment is saved.", "Okay");
        this.existingChosen = false;
      },
      (error) =>{
        this.openSnackBar("Appointment is not saved.", "Okay");
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
