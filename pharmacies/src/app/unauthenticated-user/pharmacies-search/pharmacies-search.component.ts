import { Component, OnInit } from '@angular/core';
import { PharmacyInfoDto } from 'src/app/patient/DTOs/pharmacy-info-dto';
import { PharmaciesService } from '../service/pharmacies.service';

@Component({
  selector: 'app-pharmacies-search',
  templateUrl: './pharmacies-search.component.html',
  styleUrls: ['./pharmacies-search.component.css']
})
export class PharmaciesSearchComponent implements OnInit {

  public dataSource : PharmacyInfoDto[];
  displayedColumns: string[] = ['name', 'description','address','avgRating'];
  public name = "";
  public address = "";
  public criteria : PharmacyInfoDto;
  constructor(private pharmaciesService : PharmaciesService ) { }

  ngOnInit(): void {
    this.criteria = new PharmacyInfoDto(null,this.name, null,this.address, null, null, null, null, null);
    this.pharmaciesService.getPharmacies(this.criteria).subscribe(data => this.dataSource = data);
    console.log(this.dataSource);
  }

  search(){
    this.criteria = new PharmacyInfoDto(null,this.name, null,this.address, null, null, null, null, null);
    this.pharmaciesService.getPharmacies(this.criteria).subscribe(
      data => this.dataSource = data
    );
  }

}
