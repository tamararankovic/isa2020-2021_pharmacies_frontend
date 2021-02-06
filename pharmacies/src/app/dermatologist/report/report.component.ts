import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DermAppDTO } from '../DTOs/derm-app-dto';
import { DermReportDTO } from '../DTOs/derm-report-dto';
import { MedicineDetailsDTO } from '../DTOs/med-details-dto';
import { MedAllDTO } from '../DTOs/medicine-allergy-dto';
import { MedicineDTO } from '../DTOs/medicine-dto';
import { TherapyDTO } from '../DTOs/therapy-dto';
import { DermService } from '../service/derm.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  showMedicineDetails = false;
  ingredients : string[] = [ "M", "Dj"];
  displayedColumns3: string[] = ['ingredients'];
  anyIngredient = false;
  withPrescription = true;
  details : MedicineDetailsDTO;

  reportDone = false;
  diagnosis = "";
  hasMedicine = false;
  duration = "";
  allergyCheck = false;
  firstMedicine = true;
  checkMed = false;
  isAllergic = true;
  medicineRecommendation = false;
  dose : number = 0;
  hasTherapy = false;
  medAllDTO : MedAllDTO;
  therapyPrescribed = false;
  compatibleMedicine : MedicineDTO[] = [];
  chosenTherapy : TherapyDTO = new TherapyDTO(1, "", 0);
  chosenMedicine : MedicineDTO;
  displayedColumns: string[] = ['name', 'manufacturer', 'details'];
  displayedColumns2: string[] = ['medicineName', 'duration', 'delete'];
  therapyList : TherapyDTO[] = [];
  dermAppDTO : DermAppDTO = new DermAppDTO(1, 1, "M Dj");
  report : DermReportDTO;
  medicineList : MedicineDTO[] = [];
  translatedMedicineList : MedicineDTO[] = [];

  constructor(private dermService : DermService, private _snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
    if(this.dermService.chosenAppointmnetDto == 0){
      this.router.navigate(['']);
    }
    this.dermService.getAppointmentData(this.dermService.chosenAppointmnetDto).subscribe(
      data => {
        this.dermAppDTO = data;
        this.dermService.chosenAppointmnetDto = 0;
      }
    );
  }

  addMedicine(){
    this.hasMedicine = true;
    if(this.firstMedicine){
      this.dermService.getMedicineList().subscribe(
        data => this.medicineList = data
      );
      this.firstMedicine = false;
    }
  }

  medicineDetails(element){
    this.dermService.getMedicineDetails(element.id).subscribe(
      data => {
        this.details = data;
        this.ingredients = this.details.ingredients;
        if(this.ingredients.length > 0){
          this.anyIngredient = true;
        } else this.anyIngredient = false;
        this.withPrescription = this.details.withPrescription;
        this.showMedicineDetails = true;
      }
    );
  }

  cancelDetails(){
    this.showMedicineDetails = false;
  }

  chooseMedicine(element){
    this.hasTherapy = true;
    this.chosenMedicine = element;
    this.chosenTherapy.medicineId = element.id;
    this.chosenTherapy.medicineName = element.name;
    this.isAllergic = true;
    this.allergyCheck = false;
    this.duration = "";
  }

  checkAllergies(){
    this.medAllDTO = new MedAllDTO(this.dermAppDTO.patientId, this.chosenMedicine.id);
    this.dermService.checkAllergies(this.medAllDTO).subscribe(
      data => {
        if(data.allergic == true){
          this.isAllergic = false;
          this.allergyCheck = true;
        }
        else {
          this.isAllergic = true;
          this.allergyCheck = true;
        }
        if(this.isAllergic){
          this.openSnackBar("You cannot prescribe medicine. Patient is allergic.", "Okay");
        }
      }
    );
  }

  cancelMedicine(){
    this.hasTherapy = false;
  }

  cancelRecommendation(){
    this.medicineRecommendation = false;
    this.hasTherapy = false;
  }

  addRecommendedTherapy(){
    this.medicineRecommendation = false;
    for(let i = 0; i < this.medicineList.length; i++){
      if(this.medicineList[i].id == this.chosenMedicine.id){
        this.chosenMedicine = this.medicineList[i];
      }
    }
    for(let i = 0; i < this.therapyList.length; i++){
      if(this.therapyList[i].medicineId == this.chosenMedicine.id){
        this.openSnackBar("Medicine already prescribed.", "Okay");
        this.duration = "";
        this.isAllergic = true;
        this.allergyCheck = false;
        this.hasTherapy = false;
        return;
      }
    }
    this.addTherapy();
  }

  addTherapy(){
    if(this.duration == ""){
      this.openSnackBar("You have to enter duration.", "Okay");
    }
    else if(isNaN(Number(this.duration))){
      this.openSnackBar("Duration must be number.", "Okay");
    }
    else if(Number(this.duration) == 0){
      this.openSnackBar("Duration cannot be 0.", "Okay");
    }
    else {
      this.dermService.checkMedicineQuantity(this.chosenMedicine.id, this.dermAppDTO.appointmentId).subscribe(
        data => {
          if(data.available){
            this.chosenTherapy.durationInDays = Number(this.duration);
            var chosen2 = new TherapyDTO(this.chosenTherapy.medicineId, this.chosenTherapy.medicineName, this.chosenTherapy.durationInDays);
            this.therapyList.push(chosen2);

            var therapyList2 = this.therapyList;
            this.therapyList = [];
            for(let i = 0; i < therapyList2.length; i++){
              this.therapyList.push(therapyList2[i]);
            }

            this.therapyPrescribed = true;
            this.hasTherapy = false;
            this.medicineList = this.medicineList.filter(item => item !== this.chosenMedicine);
            this.translatedMedicineList.push(this.chosenMedicine);
            if(this.medicineList.length == 0) this.hasMedicine = false;
            this.allergyCheck = false;
            this.isAllergic = true;
            this.duration = "";
          } 
          else {
            this.openSnackBar("Medicine not available in this pharmacy.", "Okay");
            this.duration = "";
            this.hasTherapy = false;
            this.dermService.getCompatibleMedicine(this.chosenMedicine.id).subscribe(
            data => {
              this.compatibleMedicine = data;
              this.medicineRecommendation = true;
            }
          );
          }
        }
      );
    }
  }

  deleteTherapy(element){
    var med = new MedicineDTO(1, "", "");
    for (let i = 0; i < this.translatedMedicineList.length; i++){
      if(this.translatedMedicineList[i].id == element.medicineId){
        med = this.translatedMedicineList[i];
      }
    }
    this.medicineList.push(med);
    this.translatedMedicineList = this.translatedMedicineList.filter(item => item !== med);
    this.therapyList = this.therapyList.filter(item => item !== element);
    var medicineList2 = this.medicineList;
    this.medicineList = [];
    for(let i = 0; i < medicineList2.length; i++){
      this.medicineList.push(medicineList2[i]);
    }
    if(this.therapyList.length == 0){
      this.therapyPrescribed = false;
    }
  }

  saveReport(){
    if(this.diagnosis == ""){
      this.openSnackBar("Diagnosis cannot be empty.", "Okay");
    } 
    else{
      this.report = new DermReportDTO(this.dermAppDTO.appointmentId, this.diagnosis, this.therapyList);
      this.dermService.saveReport(this.report).subscribe(
        data => {
          console.log("izvestaj je upisan u bazu");
          this.dermService.appointmentId = this.dermAppDTO.appointmentId;
          this.openSnackBar("Report is saved.", "Okay");
          this.reportDone = true;
        }
      );
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
