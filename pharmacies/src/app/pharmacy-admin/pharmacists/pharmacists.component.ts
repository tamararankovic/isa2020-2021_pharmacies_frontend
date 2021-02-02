import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { PharmacistDTO } from '../DTOs/pharmacist-dto';
import { PharmacistService } from '../service/pharmacist.service';

@Component({
  selector: 'app-pharmacists',
  templateUrl: './pharmacists.component.html',
  styleUrls: ['./pharmacists.component.css']
})
export class PharmacistsComponent implements OnInit {

  constructor(private pharmService : PharmacistService, private router : Router) { }

  public pharmacists : PharmacistDTO[] = [];
  public displayedColumns : string[] = [];

  ngOnInit(): void {
    this.pharmService.getPharmacists().subscribe(
      (val) => this.pharmacists = val
    )
    if (this.router.url.toLowerCase().includes(Constants.patientRole.toLowerCase()))
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacy"];
    else if (this.router.url.toLowerCase().includes(Constants.pharmacyAdminRole.toLowerCase().replace("_", "-")))
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacy", "Delete"];
  }

}
