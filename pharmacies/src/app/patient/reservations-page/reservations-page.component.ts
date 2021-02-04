import { Component, OnInit } from '@angular/core';
import { ReservationDto } from '../DTOs/reservation-dto';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.css']
})
export class ReservationsPageComponent implements OnInit {

  public dataSource : ReservationDto[];
  public index : number;
  displayedColumns: string[] = ['medicine', 'pharmacy','date','received','actions'];
  
  constructor(private patientService : PatientService) {
    
  }
   

  ngOnInit(): void {
    this.patientService.getResrvations().subscribe(data => this.dataSource = data);
  }

  
  cancel(element){
    this.dataSource = this.dataSource.filter(item => item !== element);
  }
}
