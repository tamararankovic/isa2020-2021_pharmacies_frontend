import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShowAppointmentDto } from '../DTOs/show-appointment-dto';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-incoming-appointments',
  templateUrl: './incoming-appointments.component.html',
  styleUrls: ['./incoming-appointments.component.css']
})
export class IncomingAppointmentsComponent implements OnInit {

  public appointments : ShowAppointmentDto[];
  public displayedColumns1 = ["date", "doctor", "type","action"];
  constructor(private patientService :PatientService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.patientService.getIncomingApp().subscribe(data => this.appointments = data);
  }

  cancel(element){
    this.openSnackBar("You have successfully cancelled appointment", "Okay");
    this.patientService.cancelPharmApp(element).subscribe(data => this.appointments = data);
  }

  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
