import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AllOffersDTO } from '../DTOs/all-offers-dto';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public dataSource: AllOffersDTO[] = [];
  public filteredData : AllOffersDTO[] = [];
  displayedColumns: string[] = [ 'Deadline','Accepted', 'Price', 'Pharmacy' ,'Update'];

  public selectedStatuses = new FormControl();
  public statuses : string[] = ["ACCEPTED", "WAITING FOR RESPONSE", "DENIED"];

  constructor(private supplierService : SupplierService, private _snackBar: MatSnackBar, private router : Router) { }

  ngOnInit(): void {
  
    this.supplierService.getAllOffers().subscribe(
      (data) => { this.dataSource = data; 
                for(let order of this.dataSource){
                    console.log(order.deadline);}
                  this.filteredData = this.dataSource;
                  for(let order of this.dataSource) {
                  if (!this.statuses.some(s => s == order.accepted)) {
                  this.statuses.push(order.accepted);
          }
        }  
      }
    );
  }
  filter() {
    this.filteredData = [];
    let selected : string[] = this.selectedStatuses.value;
    if (selected.length == 0) this.filteredData = this.dataSource;
    else {
      for(let order of this.dataSource) {
        if(selected.some(s => s == order.accepted)) {
          this.filteredData.push(order);
        }
      }

    }
  }

  update(idOffer : number){
    this.router.navigate(['supplier/update-offer/' + idOffer]);
  }

}
