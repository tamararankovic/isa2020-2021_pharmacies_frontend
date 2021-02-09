import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DermatologistToEmployDTO } from '../DTOs/dermatologist-to-employ-dto';
import { NewDermatologistDTO } from '../DTOs/new-dermatologist-dto';
import { DermatologistService } from '../service/dermatologist.service';

@Component({
  selector: 'app-new-dermatologist',
  templateUrl: './new-dermatologist.component.html',
  styleUrls: ['./new-dermatologist.component.css']
})
export class NewDermatologistComponent implements OnInit {

  public dermatologists : DermatologistToEmployDTO[] = [];
  public selectedDermatologistId : number;

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

  constructor(private dermService : DermatologistService, private snackBar : MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    this.dermService.getDermatologistsToEmploy().subscribe(
      (val) => this.dermatologists = val
    )
  }

  select(value : number) {
    this.selectedDermatologistId = value;
  }

  create() {
    if (this.selectedDermatologistId == undefined)
      this.openSnackBar("You need to select a dermatologist!", "Okay");
    else {
      let mondayStart = new Date();
    mondayStart.setHours(Number(this.mondayStart.split(":")[0]) + 1);
    if(this.mondayStart.substr(this.mondayStart.length-2, 2).toLowerCase() == "pm") {
      mondayStart.setHours(mondayStart.getHours() + 12);
    }
    mondayStart.setMinutes(Number(this.mondayStart.split(":")[1].split(" ")[0]));
    let mondayEnd = new Date();
    mondayEnd.setHours(Number(this.mondayEnd.split(":")[0]) + 1);
    if(this.mondayEnd.substr(this.mondayEnd.length-2, 2).toLowerCase() == "pm") {
      mondayEnd.setHours(mondayEnd.getHours() + 12);
    }
    mondayEnd.setMinutes(Number(this.mondayEnd.split(":")[1].split(" ")[0]));

    let tuesdayStart = new Date();
    tuesdayStart.setHours(Number(this.tuesdayStart.split(":")[0]) + 1);
    if(this.tuesdayStart.substr(this.tuesdayStart.length-2, 2).toLowerCase() == "pm") {
      tuesdayStart.setHours(tuesdayStart.getHours() + 12);
    }
    tuesdayStart.setMinutes(Number(this.tuesdayStart.split(":")[1].split(" ")[0]));
    let tuesdayEnd = new Date();
    tuesdayEnd.setHours(Number(this.tuesdayEnd.split(":")[0]) + 1);
    if(this.tuesdayEnd.substr(this.tuesdayEnd.length-2, 2).toLowerCase() == "pm") {
      tuesdayEnd.setHours(tuesdayEnd.getHours() + 12);
    }
    tuesdayEnd.setMinutes(Number(this.tuesdayEnd.split(":")[1].split(" ")[0]));

    let wednesdayStart = new Date();
    wednesdayStart.setHours(Number(this.wednesdayStart.split(":")[0]) + 1);
    if(this.wednesdayStart.substr(this.wednesdayStart.length-2, 2).toLowerCase() == "pm") {
      wednesdayStart.setHours(wednesdayStart.getHours() + 12);
    }
    wednesdayStart.setMinutes(Number(this.wednesdayStart.split(":")[1].split(" ")[0]));
    let wednesdayEnd = new Date();
    wednesdayEnd.setHours(Number(this.wednesdayEnd.split(":")[0]) + 1);
    if(this.wednesdayEnd.substr(this.wednesdayEnd.length-2, 2).toLowerCase() == "pm") {
      wednesdayEnd.setHours(wednesdayEnd.getHours() + 12);
    }
    wednesdayEnd.setMinutes(Number(this.wednesdayEnd.split(":")[1].split(" ")[0]));

    let thursdayStart = new Date();
    thursdayStart.setHours(Number(this.thursdayStart.split(":")[0]) + 1);
    if(this.thursdayStart.substr(this.thursdayStart.length-2, 2).toLowerCase() == "pm") {
      thursdayStart.setHours(thursdayStart.getHours() + 12);
    }
    thursdayStart.setMinutes(Number(this.thursdayStart.split(":")[1].split(" ")[0]));
    let thursdayEnd = new Date();
    thursdayEnd.setHours(Number(this.thursdayEnd.split(":")[0]) + 1); 
    if(this.thursdayEnd.substr(this.thursdayEnd.length-2, 2).toLowerCase() == "pm") {
      thursdayEnd.setHours(thursdayEnd.getHours() + 12);
    }
    thursdayEnd.setMinutes(Number(this.thursdayEnd.split(":")[1].split(" ")[0]));

    let fridayStart = new Date();
    fridayStart.setHours(Number(this.fridayStart.split(":")[0]) + 1);
    if(this.fridayStart.substr(this.fridayStart.length-2, 2).toLowerCase() == "pm") {
      fridayStart.setHours(fridayStart.getHours() + 12);
    }
    fridayStart.setMinutes(Number(this.fridayStart.split(":")[1].split(" ")[0]));
    let fridayEnd = new Date();
    fridayEnd.setHours(Number(this.fridayEnd.split(":")[0]) + 1);
    if(this.fridayEnd.substr(this.fridayEnd.length-2, 2).toLowerCase() == "pm") {
      fridayEnd.setHours(fridayEnd.getHours() + 12);
    }
    fridayEnd.setMinutes(Number(this.fridayEnd.split(":")[1].split(" ")[0]));

    let saturdayStart = new Date();
    saturdayStart.setHours(Number(this.saturdayStart.split(":")[0]) + 1);
    if(this.saturdayStart.substr(this.saturdayStart.length-2, 2).toLowerCase() == "pm") {
      saturdayStart.setHours(saturdayStart.getHours() + 12);
    }
    saturdayStart.setMinutes(Number(this.saturdayStart.split(":")[1].split(" ")[0]));
    let saturdayEnd = new Date();
    saturdayEnd.setHours(Number(this.saturdayEnd.split(":")[0]) + 1);
    if(this.saturdayEnd.substr(this.saturdayEnd.length-2, 2).toLowerCase() == "pm") {
      saturdayEnd.setHours(saturdayEnd.getHours() + 12);
    }
    saturdayEnd.setMinutes(Number(this.saturdayEnd.split(":")[1].split(" ")[0]));

    let sundayStart = new Date();
    sundayStart.setHours(Number(this.sundayStart.split(":")[0]) + 1);
    if(this.sundayStart.substr(this.sundayStart.length-2, 2).toLowerCase() == "pm") {
      sundayStart.setHours(sundayStart.getHours() + 12);
    }
    sundayStart.setMinutes(Number(this.sundayStart.split(":")[1].split(" ")[0]));
    let sundayEnd = new Date();
    sundayEnd.setHours(Number(this.sundayEnd.split(":")[0]) + 1);
    if(this.sundayEnd.substr(this.sundayEnd.length-2, 2).toLowerCase() == "pm") {
      sundayEnd.setHours(sundayEnd.getHours() + 12);
    }
    sundayEnd.setMinutes(Number(this.sundayEnd.split(":")[1].split(" ")[0]));

      let d : NewDermatologistDTO = new NewDermatologistDTO(this.selectedDermatologistId, this.mondayEnabled, this.tuesdayEnabled, this.wednesdayEnabled, this.thursdayEnabled, this.fridayEnabled, this.saturdayEnabled, this.sundayEnabled, mondayStart, mondayEnd, tuesdayStart, tuesdayEnd, wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd, saturdayStart, saturdayEnd, sundayStart, sundayEnd);
      this.dermService.postNewDermatologist(d).subscribe(
        (val) => this.router.navigate(['pharmacy-admin/dermatologists']),
        error => this.openSnackBar(error.error, "Okay")
      );
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
