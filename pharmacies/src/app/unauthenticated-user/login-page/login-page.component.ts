import { Component, OnDestroy, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { UserLoginDTO } from '../DTOs/user-login-dto';
import {UserPasswordChangeDto} from '../DTOs/user-password-change-dto';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  passwordChange = false;
  public newPassword : string;
  public newPasswordRepeat : string;
  public email : string;
  public password : string;
  constructor(private authService : AuthService, private snackBar: MatSnackBar, private router : Router) { }
  
  ngOnInit(): void {
    this.authService.loginPageDisplayed = true;
  }

  ngOnDestroy(): void {
    this.authService.loginPageDisplayed = false;
  }

  login() {
    this.authService.login(new UserLoginDTO(this.email, this.password)).subscribe(
      (val) => { this.authService.setRole(val); this.redirectToHomePage(val) },
      error => {
        if(error.error == 'You have to change your password while logging in for the first time.'){
          console.log('radi');
          this.openSnackBar(error.error, "Okay")
          this.passwordChange = true;
        }else {
        this.openSnackBar(error.error, "Okay")
        }
      }
    )
  }
  updatePassword() {
    if(this.newPassword != this.newPasswordRepeat) this.openSnackBar("Please make sure your passwords match.", "Okay")
    else if(this.newPassword.length < 8) this.openSnackBar("Please enter at least 8 characters for password.", "Okay")
    else {
      this.authService.changePassword(new UserPasswordChangeDto(this.email, this.password, this.newPassword)).subscribe(
      (data) => {
        let visibleMessage = "You have successfuly changed your password!Now you can log in!";
        this.openSnackBar(visibleMessage, "Okay");
        this.passwordChange = false;
        this.password = "";
      },
      error => {
        this.openSnackBar(error.error, "Okay")
      }
    )
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  redirectToHomePage(role : string) {
    if (role == Constants.dermatologistRole)
      this.router.navigate(['./dermatologist']);
    else if (role == Constants.patientRole)
      this.router.navigate(['./patient']);
    else if (role == Constants.pharmacistRole)
      this.router.navigate(['./pharmacist']);
    else if (role == Constants.pharmacyAdminRole)
      this.router.navigate(['./pharmacy-admin']);
    else if (role == Constants.supplierRole)
      this.router.navigate(['./supplier']);
    else if (role == Constants.systemAdminRole)
      this.router.navigate(['./system-admin']);
    else {
      this.openSnackBar("Server side error occured related to roles!", "Okay");
      this.authService.setRole(null);
    }
  }
}
