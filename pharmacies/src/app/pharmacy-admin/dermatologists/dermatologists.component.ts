import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { DermatologistDTO } from '../DTOs/dermatologist-dto';
import { DermatologistService } from '../service/dermatologist.service';

@Component({
  selector: 'app-dermatologists',
  templateUrl: './dermatologists.component.html',
  styleUrls: ['./dermatologists.component.css']
})
export class DermatologistsComponent implements OnInit {

  constructor(private dermServide : DermatologistService, private router : Router) { }

  public dermatologists : DermatologistDTO[] = [];
  public displayedColumns : string[] = [];

  ngOnInit(): void {
    this.dermServide.getDermatologists().subscribe(
      (val) => this.dermatologists = val
    )
    if (this.router.url.toLowerCase().includes(Constants.patientRole.toLowerCase()))
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacies"];
    else if (this.router.url.toLowerCase().includes(Constants.pharmacyAdminRole.toLowerCase().replace("_", "-")))
      this.displayedColumns = ["Name", "Surname", "Rating", "Pharmacies", "Delete"];
  }

}
