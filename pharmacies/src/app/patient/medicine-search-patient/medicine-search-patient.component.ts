import { Component, OnInit } from '@angular/core';
import { MedicineInfoDto } from 'src/app/unauthenticated-user/DTOs/medicine-info-dto';
import { PharmaciesService } from 'src/app/unauthenticated-user/service/pharmacies.service';

@Component({
  selector: 'app-medicine-search-patient',
  templateUrl: './medicine-search-patient.component.html',
  styleUrls: ['./medicine-search-patient.component.css']
})
export class MedicineSearchPatientComponent implements OnInit {

  public dataSource : MedicineInfoDto[];
  displayedColumns: string[] = ['name', 'info','dose','form','manufacturer','type','points','actions'];
  public name = "";
  public form = "";
  public type ="";
  public medicine = MedicineInfoDto;
  public manufacturer = "";
  public forms = ["","CAPSULE","TABLET","POWDER","CREAM","OIL","SYRUP"]
  public types = ["","ANTIBIOTIC","ANESTHETIC","ANTIHISTAMINE"]
    
  
  public criteria : MedicineInfoDto;
  constructor(private pharmaciesService : PharmaciesService ) { }

  ngOnInit(): void {
    this.criteria = new MedicineInfoDto(null,this.name, null,null, this.form,this.manufacturer, this.type, null);
    this.pharmaciesService.getMedicine(this.criteria).subscribe(data => this.dataSource = data);
    console.log(this.dataSource);
  }

  search(){
    this.criteria = new MedicineInfoDto(null,this.name, null,null, this.form,  this.manufacturer,this.type, null);
    this.pharmaciesService.getMedicine(this.criteria).subscribe(data => this.dataSource = data);
    console.log(this.name,this.form,this.manufacturer);
  }

  reserve(element){
    this.medicine = element;
   console.log(this.medicine);
  }
}
