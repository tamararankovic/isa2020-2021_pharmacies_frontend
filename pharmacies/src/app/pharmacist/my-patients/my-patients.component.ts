import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PharmService } from '../service/pharm.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MyPatientDTO } from 'src/app/dermatologist/DTOs/my-patient-dto';

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
  
  constructor(private pharmService : PharmService, private _snackBar: MatSnackBar) { }

  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.patients.push(new MyPatientDTO(0, "M", "Dj", "", ""));
    this.patients.push(new MyPatientDTO(0, "T", "L", "", ""));
    this.pharmService.getMyPatients().subscribe(
      data => {
        this.patients = data;
        this.dataSource = new MatTableDataSource(this.patients);
        this.dataSource.sort = this.sort;
      }
    );
  }

}
