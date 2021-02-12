import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MedicineCodeDTO } from '../DTOs/medicine-code-dto';
import { MedicineDTO } from '../DTOs/medicine-dto';


@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  public code : string;
  public nameOfMedicine : string;
  public type : string;
  public forme : string;
  public manufacturer : string; 
  public sideEffects : string;
  public advisedDailyDose : number;
  public points : number; 
  public additionalInfo : string;
  public prescripiton : string;
  public ingredient : string;
  public dataSource: string[] = [];
  public dataSource2 : MedicineCodeDTO[] = [];
  public codes : string[] = [];
  displayedColumns: string[] = ['ingredient'];
  displayedColumns2: string[] = ['code', 'name', 'select'];
  public withPrescription : boolean;

  constructor(private adminService : AdminService, private _snackBar: MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    this.adminService.getAllMedicines().subscribe(
      (data) => this.dataSource2 = data
    );
  }

  addMedicine(){
    if(this.prescripiton=="With") {this.withPrescription =true}
    else {
      this.withPrescription= false;
    }
    if(!(this.advisedDailyDose >=1 && this.advisedDailyDose <=10)) this.openSnackBar("Advised daily dose must be between 1 and 10.", "Okay"); else {
   this.adminService.addNewMedicine(new MedicineDTO(this.code, this.nameOfMedicine, this.type, this.forme, this.dataSource, this.manufacturer, this.withPrescription, this.additionalInfo, this.codes, this.points, this.sideEffects, this.advisedDailyDose)).subscribe(
          (data) => {
            let message = this.nameOfMedicine + " "  + "medicine is added. ";
            this.openSnackBar(message, "Okay");
          },
          error => {
              this.openSnackBar(error.error, "Okay");
            
          }
        );
        }
}
  OnClick(){
    if(this.ingredient == ""){
      this.openSnackBar("Ingredient cannot be empty.", "Okay");
    }
    else {
      this.dataSource.push(this.ingredient);
    
      var dataSource2 = this.dataSource;
      this.dataSource= [];
      for (let i=0; i<dataSource2.length; i++){
        this.dataSource.push(dataSource2[i]);
      }
      
    }
   
  }

  public OnClick2(element) {
    element.clicked=true;
    this.codes.push(element.code);

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
