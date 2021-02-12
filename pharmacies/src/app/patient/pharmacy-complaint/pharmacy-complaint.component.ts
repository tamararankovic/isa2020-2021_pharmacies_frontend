import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PharmacyAddAdminDTO } from 'src/app/system-admin/DTOs/pharmacy-add-admin-dto';
import { ComplaintDTO } from '../DTOs/complaint-dto';

import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-pharmacy-complaint',
  templateUrl: './pharmacy-complaint.component.html',
  styleUrls: ['./pharmacy-complaint.component.css']
})
export class PharmacyComplaintComponent implements OnInit {

  public text : string; 
  public id : number = 0;
  public dataSource: PharmacyAddAdminDTO[] = [];
  displayedColumns: string[] = ['name', 'description', 'address', 'select'];
  public showButton : boolean = false;

  constructor(private patientService : PatientService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.showButton = false;
    this.patientService.getAllPharmaciesUser().subscribe(
      (data) => this.dataSource = data
    );
  }
  public OnClick(element) {
    element.clicked=true;
    this.showButton = true;
    this.id = element.id;

  }

  sendComplaint(){
    console.log("salje se komplaint");
    if(this.id == 0) this.openSnackBar("Please choose pharmacy on which you want to write a complaint.", "Okay")
    else {
      this.patientService.pharmacyComplaint(new ComplaintDTO(this.id,this.text)).subscribe(
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
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
