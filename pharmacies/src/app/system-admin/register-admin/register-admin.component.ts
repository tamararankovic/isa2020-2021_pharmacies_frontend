import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminDTO } from '../DTOs/admin-dto';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  public email : string;
  public password : string;
  public confirmePassword : string;
  public nameOfUser : string;
  public surname : string; 

  constructor(private adminService : AdminService, private _snackBar: MatSnackBar, private router : Router) { }

  ngOnInit(): void {
  }
  registerAdmin(){
    if(this.password != this.confirmePassword) this.openSnackBar("Please make sure your passwords match.", "Okay")
    else if(this.password.length < 4) this.openSnackBar("Please enter at least 4 characters for password.", "Okay")
    else {
      this.adminService.registerAdmin(new AdminDTO(this.email, this.password, this.nameOfUser, this.surname)).subscribe(
          (data) => {
            let message = this.nameOfUser + " " + this.surname + ", " + "account is created. ";
            this.openSnackBar(message, "Okay");
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
