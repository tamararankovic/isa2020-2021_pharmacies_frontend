import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { constants } from 'buffer';
import { PharmacistDTO } from 'src/app/pharmacy-admin/DTOs/pharmacist-dto';
import { PharamciesCounselingDto } from '../DTOs/pharamcies-counseling-dto';
import { PharmacistAppointmentDto } from '../DTOs/pharmacist-appointment-dto';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-pharmacist-counseling',
  templateUrl: './pharmacist-counseling.component.html',
  styleUrls: ['./pharmacist-counseling.component.css']
})
export class PharmacistCounselingComponent implements OnInit {

  
  public minDate = new Date();
  public date : Date;
  public selectedTime  = "";
  public appointment =  new PharmacistAppointmentDto("",0);
  public pharmacies : PharamciesCounselingDto[];
  public selectedPharmacist : number;
  public message : string;
  public times =[ "8:00","8:30","9:00","9:30","10:30","11:00","11:30","12:00",
  "12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30",
  "17:00","17:30","18:00","18:30","19:00"];
  public pickDate = true;
  public pickPharmacy = false;
  public pickPharm = false;

  public pharm: PharmacistDTO[];

  public displayedColumns1 = ["name", "address", "rating", "price", "action"];

  constructor(private pharmacyService: PharmacyService, private datepipe : DatePipe,private _snackBar: MatSnackBar, private router:Router) {
      this.minDate.setDate(this.minDate.getDate()+ 2);
   }

  ngOnInit(): void {
    
  }

  nextStep(){
    
    if(this.date == undefined  || this.selectedTime == ""){
      this.openSnackBar("You have to choose date and time.","Okay");
    }else{
    var splitted = this.selectedTime.split(":");
    
    this.date.setHours(Number(splitted[0]));
    this.date.setMinutes(Number(splitted[1]))
    
    this.appointment.date = this.datepipe.transform(this.date, 'dd-MM-yyyy HH:mm');
    this.appointment.pharmacistId = 0;
    this.pharmacyService.getPharmaciesForCounseling(this.appointment).subscribe(data => this.pharmacies = data);
    this.pickDate = false;
    this.pickPharmacy = true;
    }
  }

  cancel(){
    this.pickDate = true;
    this.pickPharmacy = false;
  
  }

  reserve(element){
    
    this.appointment.pharmacistId = element.id;
    this.pharmacyService.getAvailablePharmacist(this.appointment).subscribe(data => this.pharm = data);
    this.pickPharm = true;
    this.pickPharmacy = false;
  }
  save(){
    if(this.selectedPharmacist == undefined){
      this.openSnackBar("You have to choose pharmacist.","Okay");
    }else{
    this.appointment.pharmacistId = this.selectedPharmacist;
    this.pharmacyService.saveApp(this.appointment).subscribe(data => this.message = data);
    this.openSnackBar("You have secessfully scheduled counseling.","Okay");
    this.router.navigateByUrl("patient/incoming-appointments");
    }
  }
  backToTable(){
    this.pickPharmacy = true;
    this.pickPharm = false;
    this.selectedPharmacist = 0;
  }

  weekendsDatesFilter = (d: Date): boolean => {
    const day = d.getDay();

    /* Prevent Saturday and Sunday for select. */
    return day !== 6 && day !== 0 ;
}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }
}
