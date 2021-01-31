import { Component, OnInit } from '@angular/core';
import { PharmDTO } from '../DTOs/pharm-dto';
import { PharmService } from '../service/pharm.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  dto : PharmDTO;
  nameChange = false;
  surnameChange = false;
  emailChange = false;

  constructor(private pharmService : PharmService) { }

  ngOnInit(): void {
    this.pharmService.getPharmacist().subscribe(
      data => this.dto = data
    );
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
    this.nameChange = false;
  }

  saveSurname(){
    this.surnameChange = false;
  }

  saveEmail(){
    this.emailChange = false;
  }

}
