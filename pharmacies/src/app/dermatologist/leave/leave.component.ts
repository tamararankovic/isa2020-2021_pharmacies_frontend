import { Component, OnInit } from '@angular/core';
import { LeaveViewDTO } from '../../pharmacist/DTOs/leave-view-dto';
import { DermService } from '../service/derm.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeaveDTO } from '../../pharmacist/DTOs/leave-dto';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  typesList = ["ANNUAL LEAVE", "SICK LEAVE"];
  requestsList : LeaveViewDTO[] = [];
  displayedColumns = ['startDate', 'endDate', 'type', 'confirmed'];
  startDate : Date;
  endDate : Date;
  minDate : Date;
  maxDate : Date;
  type : string = "ANNUAL LEAVE";

  newLeave : LeaveDTO = new LeaveDTO(new Date(), new Date(), "");

  constructor(private dermService : DermService, private _snackBar: MatSnackBar) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 2, 0, 0);
   }

  ngOnInit(): void {
    this.dermService.allLeave().subscribe(
      data => this.requestsList = data
    );
  }

  addLeave(){
    this.newLeave.startDate = this.startDate;
    this.newLeave.endDate = this.endDate;
    if(this.type == "ANNUAL LEAVE") this.newLeave.type = "ANNUAL_LEAVE";
    else this.newLeave.type = "SICK_LEAVE";
    console.log(this.newLeave);
    if(this.endDate != null && this.startDate != null){
      this.dermService.newLeave(this.newLeave).subscribe(
        data => {
          this.openSnackBar("Leave request is created.", "Okay");
          this.dermService.allLeave().subscribe(
            data => this.requestsList = data
          );
        }
      );
    } else this.openSnackBar("You must enter start date and end date.", "Okay");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
