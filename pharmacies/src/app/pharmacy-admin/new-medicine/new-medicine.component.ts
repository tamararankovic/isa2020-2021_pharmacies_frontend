import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MedicineToOrderDTO } from '../DTOs/medicine-to-order-dto';
import { MedicineService } from '../service/medicine.service';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-new-medicine',
  templateUrl: './new-medicine.component.html',
  styleUrls: ['./new-medicine.component.css']
})
export class NewMedicineComponent implements OnInit {

  public allMedicines : MedicineToOrderDTO[] = [];

  displayedColumns: string[] = ['Select', 'Code', 'Name', 'Type', 'Manufacturer'];
  displayedColumns2: string[] = ['Code', 'Name', 'Type', 'Manufacturer'];

  dataSource = new MatTableDataSource<MedicineToOrderDTO>(this.allMedicines);
  selection = new SelectionModel<MedicineToOrderDTO>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private medicineService : MedicineService, private pharmacyService : PharmacyService, private snackBar : MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    this.medicineService.getAllNotOffered().subscribe(
      (val) => {this.allMedicines = val; this.dataSource.data = this.allMedicines; this.dataSource.paginator = this.paginator;},
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  add() {
    let ids : number[] = [];
    for(let selectedValue of this.selection.selected) {
      ids.push(selectedValue.id);
    }
    this.pharmacyService.addMedicines(ids).subscribe(
      (val) => {this.openSnackBar("Medicines successfully added to the pharmacy's offer!", "Okay"); this.router.navigate(['pharmacy-admin/medicines'])}
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
