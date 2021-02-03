import { Component, OnInit } from '@angular/core';
import { PatientSearchDTO } from '../DTOs/patient-search-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DermService } from '../service/derm.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  name = "";
  surname = "";
  patients : PatientSearchDTO[] = [];
  dataSource : PatientSearchDTO[] = [];
  criteria : PatientSearchDTO = new PatientSearchDTO("", "");
  displayedColumns: string[] = ['name', 'surname'];
  constructor(private dermService : DermService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource.push(new PatientSearchDTO("M", "Dj"));
    this.dermService.searchPatients(this.criteria).subscribe(
      data => this.dataSource = data
    );
  }

  searchPatients(){
    this.criteria = new PatientSearchDTO(this.name, this.surname);
    this.dermService.searchPatients(this.criteria).subscribe(
      data => this.dataSource = data
    );
  }

}
