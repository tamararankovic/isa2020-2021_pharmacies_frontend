import { Component, OnInit } from '@angular/core';
import { PharmacyAddAdminDTO } from 'src/app/system-admin/DTOs/pharmacy-add-admin-dto';
import { PatientService } from '../service/patient.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-subscribed-pharmacies',
  templateUrl: './subscribed-pharmacies.component.html',
  styleUrls: ['./subscribed-pharmacies.component.css']
})
export class SubscribedPharmaciesComponent implements OnInit {

  public dataSource: PharmacyAddAdminDTO[] = [];
  displayedColumns: string[] = ['name', 'description', 'address', 'cancel'];

  constructor(private patientService : PatientService, private pharmacyService  : PharmacyService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.pharmacyService.getAllSubscribedPharmacies().subscribe(
      (data) => this.dataSource = data
    );
  }

  Cancel(element){
    element.clicked=true;
    this.patientService.cancelSubscription(element.id).subscribe(
      (data) => {
        let message = "your have successfully cannceled your subscription. ";
        this.openSnackBar(message, "Okay");
      },
      error => {
          this.openSnackBar(error.error, "Okay");
        
      }
    );
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
