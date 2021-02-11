import { Component, OnInit } from '@angular/core';
import { ShowAppointmentDto } from '../DTOs/show-appointment-dto';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-past-appointments',
  templateUrl: './past-appointments.component.html',
  styleUrls: ['./past-appointments.component.css']
})
export class PastAppointmentsComponent implements OnInit {

  public appointments: ShowAppointmentDto[];
  public counselings : ShowAppointmentDto[]; 
  public displayedColumns1 = ["date", "doctor", "duration","price", "type"];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPastApp().subscribe(data=> this.appointments = data);
    this.patientService.getPastCounseling().subscribe(data=> this.counselings = data);
  }

}
