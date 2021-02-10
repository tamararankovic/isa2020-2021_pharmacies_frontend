import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangePasswordDTO } from '../DTOs/change-password-dto';
import { PharmacyAdminDTO } from '../DTOs/pharmacy-admin-dto';
import { PharmacyAdminService } from '../service/pharmacy-admin.service';

@Component({
  selector: 'app-admin-basic-info',
  templateUrl: './admin-basic-info.component.html',
  styleUrls: ['./admin-basic-info.component.css']
})
export class AdminBasicInfoComponent implements OnInit {

  public name : string = "";
  public surname : string = "";
  public email : string = "";
  public password : string = "";
  public confirmPassword : string = "";
  public oldPassword : string = "";

  public admin : PharmacyAdminDTO = new PharmacyAdminDTO("", "", "");
  constructor(private adminService : PharmacyAdminService, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.adminService.get().subscribe(
      (val) => {this.admin = val; this.name = this.admin.name; this.surname = this.admin.surname; this.email = this.admin.email;},
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  update() {
    this.admin.name = this.name;
    this.admin.surname = this.surname;
    this.admin.email = this.email;
    this.adminService.update(this.admin).subscribe(
      (val) => this.openSnackBar("Personal information successfully changed!", "Okay"),
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  changePassword() {
    this.adminService.changePassword(new ChangePasswordDTO("", this.oldPassword, this.password)).subscribe(
      (val) => this.openSnackBar("Password successfully changed!", "Okay"),
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
