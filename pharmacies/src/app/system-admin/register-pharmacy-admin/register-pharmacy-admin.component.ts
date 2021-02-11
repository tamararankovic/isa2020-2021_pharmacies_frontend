import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PharmacyAddAdminDTO } from '../DTOs/pharmacy-add-admin-dto';
import { PharmacyAdminRegisterDTO } from '../DTOs/pharmacy-admin-register-dto';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-register-pharmacy-admin',
  templateUrl: './register-pharmacy-admin.component.html',
  styleUrls: ['./register-pharmacy-admin.component.css']
})
export class RegisterPharmacyAdminComponent implements OnInit {

  public email : string;
  public password : string;
  public confirmePassword : string;
  public nameOfUser : string;
  public surname : string; 
  public id : number = 0;
  public dataSource: PharmacyAddAdminDTO[] = [];
  displayedColumns: string[] = ['name', 'description', 'address', 'select'];
  public showButton : boolean = false;

  constructor(private adminService : AdminService, private _snackBar: MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    this.showButton = false;
    this.adminService.getAllPharmacies().subscribe(
      (data) => this.dataSource = data
    );
  }

  registerPharmacyAdmin(){
      console.log("uslo u ovo");
      if(this.password != this.confirmePassword) this.openSnackBar("Please make sure your passwords match.", "Okay")
      else if(this.password.length < 4) this.openSnackBar("Please enter at least 4 characters for password.", "Okay")
      else if(this.id == 0) this.openSnackBar("Please choose pharmacy for pharmacy admin.", "Okay")
      else {
        this.adminService.registerPharmacyAdmin(new PharmacyAdminRegisterDTO(this.email, this.password, this.nameOfUser, this.surname, this.id)).subscribe(
            (data) => {
              let message = this.nameOfUser + " " + this.surname + ", " + " account is created. ";
              this.openSnackBar(message, "Okay");
            },
            error => {
                this.openSnackBar(error.error, "Okay");
              
            }
          );
      }
  }

  public OnClick(element) {
    element.clicked=true;
    this.showButton = true;
    this.id = element.id;

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
