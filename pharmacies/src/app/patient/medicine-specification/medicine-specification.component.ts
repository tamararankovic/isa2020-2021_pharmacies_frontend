import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CompatibleMedicinesDTO } from '../DTOs/compatible-medicines-dto';
import { MedicineSearchDTO } from '../DTOs/medicine-search-dto';
import { MedicineSpecificationDTO } from '../DTOs/medicine-specification-dto';
import { PhamracyForMedSearchDTO } from '../DTOs/phamracy-for-med-search-dto';
import { SearchMedicineByNameDTO } from '../DTOs/search-medicine-by-name-dto';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-medicine-specification',
  templateUrl: './medicine-specification.component.html',
  styleUrls: ['./medicine-specification.component.css']
})
export class MedicineSpecificationComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'price'];

  public dataSource : MedicineSearchDTO = new MedicineSearchDTO(0, "", "", 0, new MedicineSpecificationDTO("", 0 , [], []), []);


  constructor(private patientService : PatientService, private router : Router, private route : ActivatedRoute, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.patientService.getMedicinesByName(new SearchMedicineByNameDTO("")).subscribe(
      (val) => { 
        
        this.dataSource = val.find(v => v.id == Number(this.route.snapshot.paramMap.get('id'))); 
        console.log(this.dataSource);
      console.log(this.dataSource.pharmacies);
     }
    )
  }
  viewCompatible(id : number){

  }
}
