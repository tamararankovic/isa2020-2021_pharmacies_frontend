import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ReservationDto } from '../DTOs/reservation-dto';
import { PatientService } from '../service/patient.service';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-reserv-medicine',
  templateUrl: './reserv-medicine.component.html',
  styleUrls: ['./reserv-medicine.component.css']
})
export class ReservMedicineComponent implements OnInit {

  public reservation: ReservationDto;
  public date : Date;
  public minDate = new Date();
  constructor(private pharmacyService : PharmacyService, private patientService: PatientService, private router:Router, private datepipe : DatePipe, private _snackBar : MatSnackBar) { 
    this.minDate.setDate(this.minDate.getDate() +2); 
  }

  ngOnInit(): void {
    this.reservation =  this.pharmacyService.getReservationInfo();
  }

  makeReservations(){
    if(this.date == undefined){
      this.openSnackBar("You have to choose a date in order to make reservation", "Okay")
    }else{
    this.reservation.id = null;
    this.reservation.cancellable = null;
    this.reservation.received = null;
    this.reservation.date = this.datepipe.transform(this.date, 'dd-MM-yyyy HH:mm');
    this.patientService.makeReservation(this.reservation).subscribe();
    this.openSnackBar("You have successfully made a reservation", "Okay")
    this.router.navigateByUrl("patient/medicine-reservations");
    }
  }

  cancel(){
    this.router.navigateByUrl("patient/pharmacy/" + this.reservation.id);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }
}
