import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PharmacyDTO } from 'src/app/system-admin/DTOs/pharmacy-dto';
import { MedicineInfoDto } from 'src/app/unauthenticated-user/DTOs/medicine-info-dto';
import { PharmaciesService } from 'src/app/unauthenticated-user/service/pharmacies.service';
import { PharmacyInfoDto } from '../DTOs/pharmacy-info-dto';
import { ReservationDto } from '../DTOs/reservation-dto';
import { PatientService } from '../service/patient.service';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-medicine-search-patient',
  templateUrl: './medicine-search-patient.component.html',
  styleUrls: ['./medicine-search-patient.component.css']
})
export class MedicineSearchPatientComponent implements OnInit {

  public dataSource : MedicineInfoDto[];
  public pharmacies : PharmacyDTO[] =[];
  displayedColumns: string[] = ['name', 'info','dose','form','manufacturer','type','points','actions'];
  displayedColumns1: string[] = ['name', 'info','dose','form','manufacturer','type','points'];
  public name = "";
  public form = "";
  public type ="";
  public date = new Date;
  public pharmacyName :string;
  public medicine : MedicineInfoDto[] = [];
  public manufacturer = "";
  public makeReservation :boolean = false;
  public reservation: ReservationDto = new ReservationDto(0,"","","","",true);
  public forms = ["","CAPSULE","TABLET","POWDER","CREAM","OIL","SYRUP"]
  public types = ["","ANTIBIOTIC","ANESTHETIC","ANTIHISTAMINE"]
    
  
  public criteria : MedicineInfoDto;
  constructor(private pharmaciesService : PharmaciesService, private pharmacyService : PharmacyService, private patientService:PatientService, private datepipe : DatePipe ) { }

  ngOnInit(): void {
    this.criteria = new MedicineInfoDto(null,this.name, null,null, this.form,this.manufacturer, this.type, null);
    this.pharmaciesService.getMedicine(this.criteria).subscribe(data => this.dataSource = data);
    console.log(this.dataSource);
  }


  reserve(element){
    this.medicine.push(element);
    this.reservation.medicine = element.name;
    this.pharmacyService.getPharmaciesForReservation(element).subscribe(data => this.pharmacies = data);
    console.log(this.pharmacies);
    this.makeReservation = true;
    

  }
  
  
  makeReservations(){
    this.reservation.id = null;
    this.reservation.cancellable = null;
    this.reservation.received = null;
    this.reservation.date = this.datepipe.transform(this.date, 'dd-MM-yyyy HH:mm');
    this.patientService.makeReservation(this.reservation).subscribe();

  }
  cancel(){
    this.reservation.pharmacy = "";
    this.reservation.date = null;
    this.makeReservation = false;
  }
}
