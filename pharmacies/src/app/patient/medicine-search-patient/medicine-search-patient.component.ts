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
import { PatientService } from '../service/patient.service';
import { PharmacyService } from '../service/pharmacy.service';
import { Options } from '@angular-slider/ngx-slider';
<<<<<<< HEAD
import { MatSnackBar } from '@angular/material/snack-bar';
=======
import { SearchMedicineByNameDTO } from '../DTOs/search-medicine-by-name-dto';
>>>>>>> master

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
  public selectedSideEffects = new FormControl();

  displayedColumns: string[] = ['name', 'type','averageRating','SideEffects', 'AdvisedDose', 'Ingredients', 'compatibleMedicines','pharmacies','actions'];
  public name = "";
  public criteria : SearchMedicineByNameDTO;

  public pharmacies : PharmacyDTO[] =[];
  displayedColumns1: string[] = ['name', 'type','averageRating'];
  public date : Date;
  public pharmacyName :string;
  public medicine : MedicineInfoDto[] = [];
  public makeReservation :boolean = false;
  public reservation: ReservationDto = new ReservationDto(0,"","","","",true);
<<<<<<< HEAD
  public forms = ["","CAPSULE","TABLET","POWDER","CREAM","OIL","SYRUP"]
  public types = ["","ANTIBIOTIC","ANESTHETIC","ANTIHISTAMINE"]
  public minDate = new Date();
  public selectedPharmacy = "";
    

  constructor(private pharmaciesService : PharmaciesService,private router:Router, private pharmacyService : PharmacyService, private patientService:PatientService, private datepipe : DatePipe , private _snackBar:MatSnackBar) { 
    this.minDate.setDate(this.minDate.getDate() +2);
  }
=======
 
  public sideEffectsValues : string[] = [];
 
  constructor(private router : Router,private pharmaciesService : PharmaciesService, private pharmacyService : PharmacyService, private patientService:PatientService, private datepipe : DatePipe ) { }
>>>>>>> master

  ngOnInit(): void {
    this.criteria = new SearchMedicineByNameDTO(this.name);
    this.patientService.getMedicinesByName(this.criteria).subscribe((data) => { 
      this.dataSource = data; 
      this.filteredSource = this.dataSource;
      for(let order of this.dataSource) {
        if (!this.statuses.some(s => s == order.type)) {
          this.statuses.push(order.type);
        }
        else if(!this.sideEffectsValues.some(p => p == order.specification.sideEffects)){
        this.sideEffectsValues.push(order.specification.sideEffects);
        }
      } this.filter();
      });
    console.log(this.dataSource);
  }


  search(){
    this.criteria = new SearchMedicineByNameDTO(this.name);
    this.patientService.getMedicinesByName(this.criteria).subscribe((data) => {this.dataSource = data; this.filteredSource = this.dataSource; this.filter()});
  }

  viewPharmacies(id : number) {
  this.router.navigate(['patient/med-specification/' + id]);
  }

  filter()   {
    this.filteredSource = [];
    let selected : string[] = this.selectedStatuses.value;
    let selectedSide : string[] = this.selectedSideEffects.value;
    if (this.selectedStatuses.value == null && this.selectedSideEffects.value == null) {this.filteredSource = this.dataSource;}
    else if(this.selectedStatuses.value != null && this.selectedSideEffects.value == null){
      for(let order of this.dataSource) {
        if(selected.some(s => s == order.type)) {
          this.filteredSource.push(order);
        
  
        }
      }
    }else if(this.selectedStatuses.value == null && this.selectedSideEffects.value != null) {
      for (let data of this.dataSource)
        if (selectedSide.some(s => s == data.specification.sideEffects))
        this.filteredSource.push(data);
    }else {
      for (let data of this.dataSource){
          if(selected.some(s => s == data.type) && selectedSide.some(s => s == data.specification.sideEffects)){
            this.filteredSource.push(data);
          }
      }
    }
  }
  


  reserve(element){
    var med = new MedicineInfoDto(element.id, element.name, "", element.specification.advisedDailyDose, "", "",element.type, 0);
    console.log(med);
    this.medicine.push(med);
    this.reservation.medicine = element.name;
    this.pharmacyService.getPharmaciesForReservation(med).subscribe(data => this.pharmacies = data);
    console.log(this.pharmacies);
    this.makeReservation = true;
    
  }

  makeReservations(){
    if(this.date == undefined || this.selectedPharmacy == "" ){
      this.openSnackBar("You have to choose pharmacy and date in order to make a reservation.", "Okay");
    }else{
      this.reservation.pharmacy = this.selectedPharmacy;
      this.reservation.id = null;
      this.reservation.cancellable = null;
      this.reservation.received = null;
      this.reservation.date = this.datepipe.transform(this.date, 'dd-MM-yyyy HH:mm');
      this.patientService.makeReservation(this.reservation).subscribe();
      this.openSnackBar("You have successfully made a reservation.", "Okay");
      this.router.navigateByUrl("patient/medicine-reservations");
    }

  }

  cancel(){
    this.reservation.pharmacy = "";
    this.reservation.date = null;
    this.makeReservation = false;
    this.medicine =[];
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }
  
}
