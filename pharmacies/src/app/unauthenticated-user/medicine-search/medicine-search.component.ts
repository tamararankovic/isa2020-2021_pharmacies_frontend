import { Component, OnInit } from '@angular/core';
import { MedicineInfoDto } from '../DTOs/medicine-info-dto';
import { PharmaciesService } from '../service/pharmacies.service';

@Component({
  selector: 'app-medicine-search',
  templateUrl: './medicine-search.component.html',
  styleUrls: ['./medicine-search.component.css']
})
export class MedicineSearchComponent implements OnInit {

  
  public dataSource : MedicineInfoDto[];
  displayedColumns: string[] = ['name', 'info','dose','form','manufacturer','type','points'];
  public name = "";
  public form = "";
  public type ="";
  public manufacturer = "";
  public forms = ["","CAPSULE","TABLET","POWDER","CREAM","OIL","SYRUP"]
  public types = ["","ANTIBIOTIC","ANESTHETIC","ANTIHISTAMINE"]
    
  
  public criteria : MedicineInfoDto;
  constructor(private pharmaciesService : PharmaciesService ) { }

  ngOnInit(): void {
    this.criteria = new MedicineInfoDto(this.name, null,null, this.form,this.manufacturer, this.type, null);
    this.pharmaciesService.getMedicine(this.criteria).subscribe(data => this.dataSource = data);
    console.log(this.dataSource);
  }

  search(){
    this.criteria = new MedicineInfoDto(this.name, null,null, this.form,  this.manufacturer,this.type, null);
    this.pharmaciesService.getMedicine(this.criteria).subscribe(data => this.dataSource = data);
    console.log(this.name,this.form,this.manufacturer);
  }
}
