import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientSearchDTO } from 'src/app/dermatologist/DTOs/patient-search-dto';
import { PharmService } from '../service/pharm.service';

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
  constructor(private pharmService : PharmService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource.push(new PatientSearchDTO("M", "Dj"));
    this.pharmService.searchPatients(this.criteria).subscribe(
      data => this.dataSource = data
    );
  }

  searchPatients(){
    this.criteria = new PatientSearchDTO(this.name, this.surname);
    this.pharmService.searchPatients(this.criteria).subscribe(
      data => this.dataSource = data
    );
  }

}
