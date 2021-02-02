import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { SupplierDTO } from '../DTOs/supplier-dto';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-register-supplier',
  templateUrl: './register-supplier.component.html',
  styleUrls: ['./register-supplier.component.css']
})
export class RegisterSupplierComponent implements OnInit {

  public email : string;
  public password : string;
  public confirmePassword : string;
  public nameOfUser : string;
  public surname : string; 

  constructor(private adminService : AdminService, private _snackBar: MatSnackBar, private router : Router) { }

  ngOnInit(): void {
  }
  registerSupplier(){
    if(this.password != this.confirmePassword) this.openSnackBar("Please make sure your passwords match.", "Okay")
    else if(this.password.length < 8) this.openSnackBar("Please enter at least 8 characters for password.", "Okay")
    else {
      this.adminService.registerSupplier(new SupplierDTO(this.email, this.password, this.nameOfUser, this.surname)).subscribe(
          (data) => {
            let message = this.nameOfUser + " " + this.surname + ", " + "your account is created. ";
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
