import { Component, OnInit } from '@angular/core';
import { PatientSearchDTO } from '../DTOs/patient-search-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DermService } from '../service/derm.service';
import { PharmAppDTO } from 'src/app/pharmacist/DTOs/pharm-app-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  name = "";
  surname = "";
  patients : PatientSearchDTO[] = [];
  dataSource : PatientSearchDTO[] = [];
  appDTO : PharmAppDTO = new PharmAppDTO(0, "", 0, "");
  criteria : PatientSearchDTO = new PatientSearchDTO(0, "", "");
  displayedColumns : string[] = ['name', 'surname'];

  newAppointment = false;

  chosenPatient : PatientSearchDTO;
  
  constructor(private dermService : DermService, private _snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
    this.dataSource.push(new PatientSearchDTO(0, "M", "Dj"));
    this.dermService.searchPatients(this.criteria).subscribe(
      data => this.dataSource = data
    );
  }

  searchPatients(){
    this.criteria = new PatientSearchDTO(0, this.name, this.surname);
    this.dermService.searchPatients(this.criteria).subscribe(
      data => this.dataSource = data
    );
  }

  startAppointment(element){
    this.newAppointment = false;
    this.chosenPatient = element;
    this.dermService.startAppointmentForPatient(this.chosenPatient.id).subscribe(
      data => {
        this.appDTO = data;
        if(this.appDTO.appointmentId != 0){
          this.newAppointment = true;
        } else {
          this.openSnackBar("You have no scheduled appointments with selected patient.", "Okay");
        }
      }
    );
  }

  startButton(){
    this.dermService.chosenAppointmnetDto = this.appDTO.appointmentId;
    this.router.navigate(['dermatologist/report']);
  }

  cancel(){
    this.newAppointment = false;
  }

  notPresent(){
    this.dermService.chosenAppointmnetDto = this.appDTO.appointmentId;
    this.dermService.notPresent().subscribe(
      data => {
        console.log("Gotov pregled.");
        this.newAppointment = false;
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }
}
