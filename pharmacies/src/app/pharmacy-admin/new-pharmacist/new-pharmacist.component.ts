import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewPharmacistDTO } from '../DTOs/new-pharmacist-dto';
import { PharmacistService } from '../service/pharmacist.service';

@Component({
  selector: 'app-new-pharmacist',
  templateUrl: './new-pharmacist.component.html',
  styleUrls: ['./new-pharmacist.component.css']
})
export class NewPharmacistComponent implements OnInit {

  constructor(private pharmService : PharmacistService, private snackBar : MatSnackBar, private router : Router) { }

  public mondayEnabled = true;
  public tuesdayEnabled = true;
  public wednesdayEnabled = true;
  public thursdayEnabled = true;
  public fridayEnabled = true;
  public saturdayEnabled = true;
  public sundayEnabled = true;

  public startTime : string = "08:00 am";
  public endTime : string = "08:00 pm";

  public mondayStart : string = this.startTime;
  public mondayEnd : string = this.endTime;
  public tuesdayStart : string = this.startTime;
  public tuesdayEnd : string = this.endTime;
  public wednesdayStart : string = this.startTime;
  public wednesdayEnd : string = this.endTime;
  public thursdayStart : string = this.startTime;
  public thursdayEnd : string = this.endTime;
  public fridayStart : string = this.startTime;
  public fridayEnd : string = this.endTime;
  public saturdayStart : string = this.startTime;
  public saturdayEnd : string = this.endTime;
  public sundayStart : string = this.startTime;
  public sundayEnd : string = this.endTime;

  public name : string = "";
  public surname : string = "";
  public email : string = "";
  public password : string = "";
  public confirmPassword : string = "";

  ngOnInit(): void {
  }

  create() {
    let mondayStart = new Date();
      mondayStart.setHours(Number(this.mondayStart.substr(0, 2)));
      mondayStart.setMinutes(Number(this.mondayStart.substr(3, 2)));
      let mondayEnd = new Date();
      mondayEnd.setHours(Number(this.mondayEnd.substr(0, 2)));
      mondayEnd.setMinutes(Number(this.mondayEnd.substr(3, 2)));

      let tuesdayStart = new Date();
      tuesdayStart.setHours(Number(this.tuesdayStart.substr(0, 2)));
      tuesdayStart.setMinutes(Number(this.tuesdayStart.substr(3, 2)));
      let tuesdayEnd = new Date();
      tuesdayEnd.setHours(Number(this.tuesdayEnd.substr(0, 2)));
      tuesdayEnd.setMinutes(Number(this.tuesdayEnd.substr(3, 2)));

      let wednesdayStart = new Date();
      wednesdayStart.setHours(Number(this.wednesdayStart.substr(0, 2)));
      wednesdayStart.setMinutes(Number(this.wednesdayStart.substr(3, 2)));
      let wednesdayEnd = new Date();
      wednesdayEnd.setHours(Number(this.wednesdayEnd.substr(0, 2)));
      wednesdayEnd.setMinutes(Number(this.wednesdayEnd.substr(3, 2)));

      let thursdayStart = new Date();
      thursdayStart.setHours(Number(this.thursdayStart.substr(0, 2)));
      thursdayStart.setMinutes(Number(this.thursdayStart.substr(3, 2)));
      let thursdayEnd = new Date();
      thursdayEnd.setHours(Number(this.thursdayEnd.substr(0, 2)));
      thursdayEnd.setMinutes(Number(this.thursdayEnd.substr(3, 2)));

      let fridayStart = new Date();
      fridayStart.setHours(Number(this.fridayStart.substr(0, 2)));
      fridayStart.setMinutes(Number(this.fridayStart.substr(3, 2)));
      let fridayEnd = new Date();
      fridayEnd.setHours(Number(this.fridayEnd.substr(0, 2)));
      fridayEnd.setMinutes(Number(this.fridayEnd.substr(3, 2)));

      let saturdayStart = new Date();
      saturdayStart.setHours(Number(this.saturdayStart.substr(0, 2)));
      saturdayStart.setMinutes(Number(this.saturdayStart.substr(3, 2)));
      let saturdayEnd = new Date();
      saturdayEnd.setHours(Number(this.saturdayEnd.substr(0, 2)));
      saturdayEnd.setMinutes(Number(this.saturdayEnd.substr(3, 2)));

      let sundayStart = new Date();
      sundayStart.setHours(Number(this.sundayStart.substr(0, 2)));
      sundayStart.setMinutes(Number(this.sundayStart.substr(3, 2)));
      let sundayEnd = new Date();
      sundayEnd.setHours(Number(this.sundayEnd.substr(0, 2)));
      sundayEnd.setMinutes(Number(this.sundayEnd.substr(3, 2)));

      let p : NewPharmacistDTO = new NewPharmacistDTO(this.name, this.surname, this.email, this.password, this.mondayEnabled, this.tuesdayEnabled, this.wednesdayEnabled, this.thursdayEnabled, this.fridayEnabled, this.saturdayEnabled, this.sundayEnabled, mondayStart, mondayEnd, tuesdayStart, tuesdayEnd, wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd, saturdayStart, saturdayEnd, sundayStart, sundayEnd);
      this.pharmService.create(p).subscribe(
        (val) => this.router.navigate(['pharmacy-admin/pharmacists']),
        error => this.openSnackBar(error.error, "Okay")
      )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
