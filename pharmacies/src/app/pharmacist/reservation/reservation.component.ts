import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PharmService } from '../service/pharm.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationIdText ="";
  valid = false;
  reservationId = 0;
  searchDone = false;
  constructor(private pharmService : PharmService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  search() {
    if(this.reservationIdText == ""){
      this.openSnackBar("Reservation id cannot be empty.", "Okay");
    }
    else if(isNaN(Number(this.reservationIdText))){
      this.openSnackBar("Reservation id must be number.", "Okay");
    }
    else this.pharmService.checkIfReservationIsValid(Number(this.reservationIdText)).subscribe(
      data => {
        console.log(data);
        if(data.valid == true){
          this.valid = true;
          this.searchDone = true;
          this.reservationId = Number(this.reservationIdText);
        } else {
          this.valid = false;
          this.searchDone = true;
        }
      }
    );
  }

  received(){
    this.searchDone = false;

    this.pharmService.reservationReceived(this.reservationId).subscribe(
      data => {
        console.log(data);
        this.openSnackBar("Medicine is received.", "Okay");
      }
    );

    this.reservationIdText = "";
  }

  cancel(){
    this.searchDone = false;
    this.reservationIdText = "";
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
