import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComplaintDTO } from '../DTOs/complaint-dto';
import { UserDTO } from '../DTOs/user-dto';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-dermatologist-complaint',
  templateUrl: './dermatologist-complaint.component.html',
  styleUrls: ['./dermatologist-complaint.component.css']
})
export class DermatologistComplaintComponent implements OnInit {

  public text : string; 
  public id : number = 0;
  public dataSource: UserDTO[] = [];
  displayedColumns: string[] = ['name', 'surname', 'select'];
  public showButton : boolean = false;

  
  constructor(private patientService : PatientService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.showButton = false;
    this.patientService.getAllDermatologists().subscribe(
      (data) => this.dataSource = data
    );
  }

  sendComplaint(){
  
    if(this.id == 0) this.openSnackBar("Please choose dermatologist on which you want to write a complaint.", "Okay")
      else {
        this.patientService.dermatologistComplaint(new ComplaintDTO(this.id,this.text)).subscribe(
            (data) => {
              let message = "Complaint is successfully submitted. ";
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
