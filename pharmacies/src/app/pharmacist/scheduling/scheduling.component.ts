import { Component, OnInit } from '@angular/core';
import { PharmService } from '../service/pharm.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SaveAppDTO } from '../DTOs/save-app-dto';
import { AppAvailableDTO } from '../DTOs/app-available-dto';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {

  appointmentDateTime : Date = new Date();
  dto : SaveAppDTO = new SaveAppDTO(this.pharmService.appointmentId, this.appointmentDateTime);
  appAvailable : AppAvailableDTO;
  constructor(private pharmService : PharmService, private _snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
    if(this.pharmService.appointmentId == 0){
      this.router.navigate(['']);
    }
  }
  
  checkIfAvailable(){
    console.log(this.appointmentDateTime);
    this.dto.startDateTime = this.appointmentDateTime;
    this.pharmService.isAppointmentAvailable(this.dto).subscribe(
      data => {
        this.appAvailable = data;
        console.log(this.appAvailable);
        if(this.appAvailable.available){
          this.pharmService.saveAppointment(this.dto).subscribe(
            data => console.log(data + "Appointment saved.")
          );
          this.openSnackBar("Appointment is saved.", "Okay");
        }
        else this.openSnackBar("Try another date and time. This appointment is not available.", "Okay");
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
