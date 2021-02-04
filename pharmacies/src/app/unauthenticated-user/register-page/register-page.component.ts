import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Constants } from 'src/app/shared/constants';
import { UserRegisterDto } from '../DTOs/user-register-dto';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  public email : string;
  public password : string;
  public confirmePassword : string;
  public nameOfUser : string;
  public surname : string; 
  public address : string; 
  public city : string;
  public country : string;
  public phone : string;
  
  constructor(private authService : AuthService, private _snackBar: MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    this.authService.registerPageDisplayed = true;
  }

  ngOnDestroy(): void {
    this.authService.registerPageDisplayed = false;
  }

  register(){
    if(this.password != this.confirmePassword) this.openSnackBar("Please make sure your passwords match.", "Okay")
    else if(this.password.length < 4) this.openSnackBar("Please enter at least 4 characters for password.", "Okay")
    else {
      this.authService.register(new UserRegisterDto(this.email, this.password, this.nameOfUser, this.surname,
        this.address, this.city, this.country, this.phone)).subscribe(
          (data) => {
            let message = this.nameOfUser + " " + this.surname + ", " + "your account is created. ";
            let visibleMessage = "Activation email has been sent to " + this.email ;
            this.openSnackBar(message + visibleMessage, "Okay");
          },
          error => {
            this.openSnackBar(error.error, "Okay");
          }
        );
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
