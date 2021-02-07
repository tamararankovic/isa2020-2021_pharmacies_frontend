import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacyDTO } from 'src/app/system-admin/DTOs/pharmacy-dto';
import { MedicineInfoDto } from 'src/app/unauthenticated-user/DTOs/medicine-info-dto';
import { PharmaciesService } from 'src/app/unauthenticated-user/service/pharmacies.service';
import { MedicineSearchDTO } from '../DTOs/medicine-search-dto';
import { PharmacyInfoDto } from '../DTOs/pharmacy-info-dto';
import { ReservationDto } from '../DTOs/reservation-dto';
import { SearchMedicineByNameDTO } from '../DTOs/search-medicine-by-name-dto';
import { PatientService } from '../service/patient.service';
import { PharmacyService } from '../service/pharmacy.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-medicine-search-patient',
  templateUrl: './medicine-search-patient.component.html',
  styleUrls: ['./medicine-search-patient.component.css']
})
export class MedicineSearchPatientComponent implements OnInit {

  public dataSource : MedicineSearchDTO[];
  public filteredSource : MedicineSearchDTO[] = [];
  public selectedStatuses = new FormControl();
  public statuses : string[] = ["ANTIBIOTIC", "ANESTHETIC", "ANTIHISTAMINE"];
  
  displayedColumns: string[] = ['name', 'type','averageRating','SideEffects', 'AdvisedDose', 'Ingredients', 'compatibleMedicines','pharmacies','actions'];
  public name = "";
  public criteria : SearchMedicineByNameDTO;

  public pharmacies : PharmacyDTO[] =[];
  displayedColumns1: string[] = ['name', 'type','averageRating'];
  public date = new Date;
  public pharmacyName :string;
  public medicine : MedicineInfoDto[] = [];
  public makeReservation :boolean = false;
  public reservation: ReservationDto = new ReservationDto(0,"","","","",true);
  public forms = ["","CAPSULE","TABLET","POWDER","CREAM","OIL","SYRUP"]
  public types = ["","ANTIBIOTIC","ANESTHETIC","ANTIHISTAMINE"]
  public minDate = new Date()
    

  constructor(private pharmaciesService : PharmaciesService,private router:Router, private pharmacyService : PharmacyService, private patientService:PatientService, private datepipe : DatePipe ) { 
    this.minDate.setDate(this.minDate.getDate() +2);
  }

  ngOnInit(): void {
    this.criteria = new SearchMedicineByNameDTO(this.name);
    this.patientService.getMedicinesByName(this.criteria).subscribe((data) => { 
      this.dataSource = data; 
      this.filteredSource = this.dataSource;
      for(let order of this.dataSource) {
        if (!this.statuses.some(s => s == order.type)) {
          this.statuses.push(order.type);
        }
      }  
      });
    console.log(this.dataSource);
  }
  search(){
    this.criteria = new SearchMedicineByNameDTO(this.name);
    this.patientService.getMedicinesByName(this.criteria).subscribe(data => this.filteredSource = data);
  }
  viewPharmacies(id : number) {
  this.router.navigate(['patient/med-specification/' + id]);
  }

  filter() {
    this.filteredSource = [];
    let selected : string[] = this.selectedStatuses.value;
    if (selected.length == 0) {this.filteredSource = this.dataSource;}
    else {
      for(let order of this.dataSource) {
        if(selected.some(s => s == order.type)) {
          this.filteredSource.push(order);
        }
      }
    }
  }

  reserve(element){
    var med = new MedicineInfoDto(element.id, element.name, "", element.specification.advisedDailyDose, "", "",element.type, 0);
    this.medicine.push(med);
    this.reservation.medicine = element.name;
    this.pharmacyService.getPharmaciesForReservation(med).subscribe(data => this.pharmacies = data);
    console.log(this.pharmacies);
    this.makeReservation = true;
    
  }

  makeReservations(){
    this.reservation.id = null;
    this.reservation.cancellable = null;
    this.reservation.received = null;
    this.reservation.date = this.datepipe.transform(this.date, 'dd-MM-yyyy HH:mm');
    this.patientService.makeReservation(this.reservation).subscribe();
    this.router.navigateByUrl("patient/medicine-reservations");

  }

  cancel(){
    this.reservation.pharmacy = "";
    this.reservation.date = null;
    this.makeReservation = false;
    this.medicine =[];
  }
  
}
