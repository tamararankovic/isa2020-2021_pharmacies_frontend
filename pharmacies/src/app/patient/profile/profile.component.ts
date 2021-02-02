import { Component, OnInit } from '@angular/core';
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

  public name1 : string;
  public surname : string;
  public email : string;
  public address : string;
  public city : string;
  public country : string;
  public phone : string;
  public points : number;
  public category : string;
  
 
  constructor(private patientService : PatientService) { }

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
      data =>  this.profile = data);
        
  }
}
