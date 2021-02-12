import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private patientService:PatientService, private router:Router, private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  isSuspended(){
    let penalties  = 0;
    this.patientService.getPenalties().subscribe((data) => { penalties = data;
    console.log(penalties);
    if(penalties >=  3){
      this.openSnackBar("You have three penalties. You cannot schedule counseling until next month.","Okay");

    }else{
      this.router.navigateByUrl("patient/upload-qr");
    }  
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
