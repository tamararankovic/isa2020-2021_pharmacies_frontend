import { Component, OnInit } from '@angular/core';
import { SupplierProfileDTO } from '../DTOs/supplier-profile-dto';
import { SupplierService } from '../service/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PasswordSupplierDTO } from '../DTOs/password-supplier-dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  dto : SupplierProfileDTO;
  name = "";
  surname = "";
  email = "";
  password = "";
  newPassword = "";
  newPasswordRepeat = "";
  nameChange = false;
  surnameChange = false;
  emailChange = false;
  passwordChange = false;
  hide = true;

  constructor(private supplierService : SupplierService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.supplierService.getSupplier().subscribe(
      data => this.dto = data
    );
    this.name = this.dto.name;
    this.surname = this.dto.surname;
    this.email = this.dto.email;
  }

  changeName(){
    this.nameChange = true;
  }

  changeSurname(){
    this.surnameChange = true;
  }

  changeEmail(){
    this.emailChange = true;
  }

  cancelName(){
    this.nameChange = false;
  }

  cancelSurname(){
    this.surnameChange = false;
  }

  cancelEmail(){
    this.emailChange = false;
  }

  saveName(){
    var help = this.dto.name;
    this.dto.name = this.name;
    this.supplierService.updateSupplier(this.dto).subscribe(
      data => {
        this.dto = data;
        this.openSnackBar("Name is changed.", "Okay");
      },
      error => {
        this.openSnackBar("Incorrect name.", "Okay");
        this.dto.name = help;
      }
    );
    this.nameChange = false;
  }

  saveSurname(){
    var help = this.dto.surname;
    this.dto.surname = this.surname;
    this.supplierService.updateSupplier(this.dto).subscribe(
      data => {
        this.dto = data;
        this.openSnackBar("Surname is changed.", "Okay");
      },
      error => {
        this.openSnackBar("Incorrect surname.", "Okay");
        this.dto.surname = help;
      }
    );
    this.surnameChange = false;
  }

  saveEmail(){
    var help = this.dto.email;
    this.dto.email = this.email;
    this.supplierService.updateSupplier(this.dto).subscribe(
      data => {
        this.dto = data;
        this.openSnackBar("Email is changed.", "Okay");
      },
      error => {
        this.openSnackBar("Incorrect email.", "Okay");
        this.dto.email = help;
      }
    );
    this.emailChange = false;
  }

  changePassword(){
    this.passwordChange = true;
  }

  cancelPassword(){
    this.passwordChange = false;
  }

  savePassword(){
    if(this.newPassword != this.newPasswordRepeat) this.openSnackBar("Please make sure your passwords match.", "Okay");
    else if(this.password == "" || this.newPassword == "" || this.newPasswordRepeat == "") this.openSnackBar("Password cannot be empty.", "Okay");
    else if(this.newPassword.length < 8) this.openSnackBar("Please enter at least 8 characters.", "Okay");
    else{
      var dto : PasswordSupplierDTO = new PasswordSupplierDTO(this.password, this.newPassword, this.newPasswordRepeat);
      this.supplierService.changePassword(dto).subscribe(
        val => {
          this.openSnackBar("Password changed.", "Okay");
          this.passwordChange = false;
          this.password = "";
          this.newPassword = "";
          this.newPasswordRepeat = "";
        },
        error => {
          this.openSnackBar(error.error, "Okay");
        }
      );
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }


}
