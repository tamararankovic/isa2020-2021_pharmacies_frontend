import { Component, OnInit } from '@angular/core';
import { PharmaciesService } from 'src/app/unauthenticated-user/service/pharmacies.service';
import { PharmacyInfoDto } from '../DTOs/pharmacy-info-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacies-search-patient',
  templateUrl: './pharmacies-search-patient.component.html',
  styleUrls: ['./pharmacies-search-patient.component.css']
})
export class PharmaciesSearchPatientComponent implements OnInit {

  public dataSource : PharmacyInfoDto[];
  displayedColumns: string[] = ['name', 'description','address','avgRating','actions'];
  public name = "";
  public address = "";
  public path:string;
  public criteria : PharmacyInfoDto;
  
  constructor(private pharmaciesService : PharmaciesService,private router:Router ) {
    
  }
   

  ngOnInit(): void {
    this.criteria = new PharmacyInfoDto(null,this.name, null,this.address, null, null, null, null, null);
    this.pharmaciesService.getPharmacies(this.criteria).subscribe(data => this.dataSource = data);
    console.log(this.dataSource);
  }

  search(){
    this.criteria = new PharmacyInfoDto(null, this.name, null,this.address, null, null, null, null, null);
    this.pharmaciesService.getPharmacies(this.criteria).subscribe(
      data => this.dataSource = data
    );
  }
  goToPage(element){
    this.path = "patient/pharmacy/" +element.id;
  this.router.navigateByUrl(this.path);
  }
}
