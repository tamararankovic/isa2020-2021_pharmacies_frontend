import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PharmacyInfoDto } from '../DTOs/pharmacy-info-dto';
import { PharmacyProfileExaminationDto } from '../DTOs/pharmacy-profile-examination-dto';
import { ReservationDto } from '../DTOs/reservation-dto';
import { PharmacyService } from '../service/pharmacy.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DermAppDto } from '../DTOs/derm-app-dto';
import { NgxMaterialTimepickerHoursFace } from 'ngx-material-timepicker/src/app/material-timepicker/components/timepicker-hours-face/ngx-material-timepicker-hours-face';
import { PatientService } from '../service/patient.service';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';

@Component({
  selector: 'app-pharmacy-page',
  templateUrl: './pharmacy-page.component.html',
  styleUrls: ['./pharmacy-page.component.css']
})
export class PharmacyPageComponent implements OnInit {

  public data : PharmacyInfoDto = new PharmacyInfoDto(0,"", "", "", 0, [], [], [], []);
  public reservation :ReservationDto;
  public dermApp : DermAppDto;
  public message: string;

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
  constructor(private pharmacyService : PharmacyService, private patientService: PatientService,private route : ActivatedRoute, private _snackBar: MatSnackBar,private router:Router) {
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

  goToPage(name){
    let penalties  = 0;
    this.patientService.getPenalties().subscribe((data) => { penalties = data;
    console.log(penalties);
    if(penalties < 3){
    this.router.navigateByUrl("patient/make-reservation");
    console.log();
    this.reservation  = new  ReservationDto(this.data.id, name, this.data.name, null, null, true);
    this.pharmacyService.setReservationInfo(this.reservation);}
  else{
    this.openSnackBar("You have three penalties. You cannot reserv medicine until next month.","Okay");
  }  
  });
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

  scheduleApp(element){
    let penalties  = 0;
    this.patientService.getPenalties().subscribe((data) => { penalties = data;
    console.log(penalties);
    if(penalties < 3){

      this.dermApp = new DermAppDto(element.id, element.startDateTime, element.dermatologist, element.duration, element.price,this.findVersionById(element.id));
      this.pharmacyService.scheduleDermApp(this.dermApp).subscribe(data =>this.message = data );
      this.openSnackBar("You have successfull scheduled appointment.","Okay");
    }
    else {
      this.openSnackBar("You have three penalties. You cannot schedule an appointment until next month.","Okay");
    }
  });
  }

  findVersionById(id) {
    for(let app of this.data.examinations) {
      if (app.id == id) {
        return app.version;
      }
    }
    return -1;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
