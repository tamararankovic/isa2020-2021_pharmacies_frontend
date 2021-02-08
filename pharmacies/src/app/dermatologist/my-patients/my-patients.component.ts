import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyPatientDTO } from '../DTOs/my-patient-dto';
import { DermService } from '../service/derm.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  patients : MyPatientDTO[] = [];
  dataSource;
  displayedColumns : string[] = ['name', 'surname', 'appointmentDate', 'time'];

  constructor(private dermService : DermService, private _snackBar: MatSnackBar) { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.patients.push(new MyPatientDTO(0, "M", "Dj", "", ""));
    this.patients.push(new MyPatientDTO(0, "T", "L", "", ""));
    this.dermService.getMyPatients().subscribe(
      data => {
        this.patients = data;
        this.dataSource = new MatTableDataSource(this.patients);
        this.dataSource.sort = this.sort;
      }
    );
  }

  sortSurname(){
    console.log("Surname sort.");
  }

  sortName(){
    console.log("Name sort.");
  }

  sortDate(){
    console.log("Date sort.");
  }

  sortTime(){
    console.log("Time sort.");
  }

}
