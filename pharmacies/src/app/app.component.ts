import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PatientService } from './patient/service/patient.service';
import { AuthService } from './unauthenticated-user/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pharmacies';
  public penalties = false;

  constructor(public authService : AuthService, private patientService: PatientService, private _snackBar: MatSnackBar, private router: Router) { }

  isSuspended(){
    let penalties  = 0;
    this.patientService.getPenalties().subscribe((data) => { penalties = data;
    console.log(penalties);
    if(penalties >=  3){
      this.openSnackBar("You have three penalties. You cannot schedule counseling until next month.","Okay");
      this.penalties = true;
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
