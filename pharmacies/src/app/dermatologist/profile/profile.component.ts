import { Component, OnInit } from '@angular/core';
import { DermDTO } from '../DTOs/derm-dto';
import { DermService } from '../service/derm.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  dto : DermDTO;
  nameChange = false;
  surnameChange = false;
  emailChange = false;
  dermData : DermDTO = new DermDTO("Tamara", "Rankovic", "email3@gmail.com");

  constructor(private dermService : DermService) { }

  ngOnInit(): void {
    this.dermService.getDermatologist().subscribe(
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