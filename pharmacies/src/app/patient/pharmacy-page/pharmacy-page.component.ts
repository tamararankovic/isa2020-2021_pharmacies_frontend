import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PharmacyInfoDto } from '../DTOs/pharmacy-info-dto';
import { PharmacyProfileExaminationDto } from '../DTOs/pharmacy-profile-examination-dto';
import { PharmacyService } from '../service/pharmacy.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pharmacy-page',
  templateUrl: './pharmacy-page.component.html',
  styleUrls: ['./pharmacy-page.component.css']
})
export class PharmacyPageComponent implements OnInit {

  public data : PharmacyInfoDto = new PharmacyInfoDto(0,"", "", "", 0, [], [], [], []);

  public displayedColumnsMedicine = ["Name", "Reserve"];
  public displayedColumnsPharmacist = ["Name"];
  public displayedColumnsDermatologist = ["Name"];
  public displayedColumnsExamination = ["Date", "StartTime", "Duration", "Dermatologist", "Price", "Schedule"];

  public showMedicines = false;
  public showPharmacists = false;
  public showDermatologists = false;
  public showExaminations = false;

  public latitude: number = 0;
  public longitude: number = 0;
  public zoom:number = 15;

  private geocoder;

  public isSelected:string;
  constructor(private pharmacyService : PharmacyService, private route : ActivatedRoute, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.pharmacyService.getPharmacyInfo(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(
      (val) => {this.data = val;
                for (let e of this.data.examinations) {
                  e.startDateTime = new Date(e.startDateTime[0], e.startDateTime[1]-1, e.startDateTime[2], e.startDateTime[3], e.startDateTime[4]);
                }
                this.geocoder = new google.maps.Geocoder();
                this.geocoder.geocode({ address: this.data.address }, (results, status) => {
                  if (status === "OK") {
                    this.latitude = +results[0].geometry.location.lat();
                    this.longitude = +results[0].geometry.location.lng();
                    this.zoom = 15;
                  } else {
                    alert("Geocode was not successful for the following reason: " + status);
                  }
                });
              }
    )
  }

  toggleMedicineList() {
    this.showMedicines = !this.showMedicines;
    this.showPharmacists = false;
    this.showDermatologists = false;
    this.showExaminations = false;
  }

  togglePharmacistList() {
    this.showPharmacists = !this.showPharmacists;
    this.showMedicines = false;
    this.showDermatologists = false;
    this.showExaminations = false;
  }

  toggleDermatologistList() {
    this.showDermatologists = !this.showDermatologists;
    this.showPharmacists = false;
    this.showMedicines = false;
    this.showExaminations = false;
  }

  toggleExaminationList() {
    this.showExaminations = !this.showExaminations;
    this.showPharmacists = false;
    this.showDermatologists = false;
    this.showMedicines = false;
  }
  Subscribe(value) {
    this.isSelected=value;
    console.log('radii');
    this.pharmacyService.subscribeToPharmacy(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(
      (data) => {
        let message = "Your are successfully subscribed to actions and benefits of this pharmacy. ";
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
