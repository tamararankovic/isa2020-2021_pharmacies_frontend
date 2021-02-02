import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PasswordDTO } from 'src/app/dermatologist/DTOs/password-dto';
import { PatientDto } from '../DTOs/patient-dto';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile : PatientDto;
  public disabled : boolean = true;
  public hidden : boolean = true;
  public hidden1 : boolean = false;
  public passwordChange: boolean = false;

  password = "";
  newPassword = "";
  newPasswordRepeat = "";

  public name1 : string;
  public surname : string;
  public email : string;
  public address : string;
  public city : string;
  public country : string;
  public phone : string;
  public points : number;
  public category : string;
  
 
  constructor(private patientService : PatientService,  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.patientService.getPatient().subscribe(data => this.profile = data);      
  }

  enableFields(){
    this.name1 = this.profile.name;
    this.surname = this.profile.surname;
    this.address = this.profile.address;
    this.city = this.profile.city;
    this.country = this.profile.country;
    this.phone = this.profile.phone; 

    this.disabled = false;
    this.hidden = false;
    this.hidden1 = true;
   
  }
  cancelEdit(){
    this.profile.name = this.name1;
    this.profile.surname = this.surname;
    this.profile.address = this.address;
    this.profile.city = this.city;
    this.profile.country = this.country;
    this.profile.phone = this.phone;

    this.disabled = true;
    this.hidden = true;
    this.hidden1 = false;
  }

  editPassword(){
    this.passwordChange = true;
    this.hidden = false;
    this.hidden1 = false;
  }

  saveChanges(){
    this.disabled = true;
    this.hidden = true;
    this.hidden1 = false; 
    

    this.patientService.editPatient(this.profile).subscribe(
      data => this.profile = data);
        
  }

  savePassword(){
    if(this.newPassword != this.newPasswordRepeat) this.openSnackBar("Please make sure your passwords match.", "Okay");
    else if(this.password == "" || this.newPassword == "" || this.newPasswordRepeat == "") this.openSnackBar("Password cannot be empty.", "Okay");
    else if(this.newPassword.length < 8) this.openSnackBar("Please enter at least 8 characters.", "Okay");
    else{
      var dto : PasswordDTO = new PasswordDTO(this.password, this.newPassword, this.newPasswordRepeat);
      this.patientService.changePassword(dto).subscribe(
        val => {
          this.openSnackBar("Password changed.", "Okay");
          this.passwordChange = false;
          this.hidden = true;
          this.hidden1 = false;
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

  cancelPassword(){
    this.passwordChange = false;
    this.hidden = true;
    this.hidden1 = false;
    
    this.password = "";
    this.newPassword = "";
    this.newPasswordRepeat = "";
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }
}
