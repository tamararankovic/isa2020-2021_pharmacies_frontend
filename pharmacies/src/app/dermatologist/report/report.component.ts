import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DermAppDTO } from '../DTOs/derm-app-dto';
import { DermReportDTO } from '../DTOs/derm-report-dto';
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

  diagnosis = "";
  hasMedicine = false;
  duration = "";
  allergyCheck = false;
  firstMedicine = true;
  isAllergic = true;
  dose : number = 0;
  hasTherapy = false;
  medAllDTO : MedAllDTO;
  therapyPrescribed = false;
  chosenTherapy : TherapyDTO = new TherapyDTO(1, "", 0);
  chosenMedicine : MedicineDTO;
  displayedColumns: string[] = ['name', 'manufacturer', 'details'];
  displayedColumns2: string[] = ['medicineName', 'duration', 'delete'];
  therapyList : TherapyDTO[] = [];
  dermAppDTO : DermAppDTO = new DermAppDTO(1, 1, "M Dj");
  report : DermReportDTO;
  medicineList : MedicineDTO[] = [];
  translatedMedicineList : MedicineDTO[] = [];
  constructor(private dermService : DermService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dermService.getAppointmentData(1).subscribe(
      data => this.dermAppDTO = data
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

  medicineDetails(){
    
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
      if(this.checkMedicineQuantity()){
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

  checkMedicineQuantity() : boolean{
    return true;
  }

  saveReport(){
    if(this.diagnosis == ""){
      this.openSnackBar("Diagnosis cannot be empty.", "Okay");
    } 
    else{
      this.report = new DermReportDTO(this.dermAppDTO.appointmentId, this.diagnosis, this.therapyList);
      this.dermService.saveReport(this.report).subscribe(
        data => console.log("izvestaj je upisan u bazu")
      );
      this.openSnackBar("Report is saved.", "Okay");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
