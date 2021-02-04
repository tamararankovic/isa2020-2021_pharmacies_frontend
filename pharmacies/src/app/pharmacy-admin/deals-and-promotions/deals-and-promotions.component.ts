import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DealPromotionDTO } from '../DTOs/deal-promotion-dto';

@Component({
  selector: 'app-deals-and-promotions',
  templateUrl: './deals-and-promotions.component.html',
  styleUrls: ['./deals-and-promotions.component.css']
})
export class DealsAndPromotionsComponent implements OnInit {

  constructor() { }

  text : string = "";
  option : number = 3;

  minDate = new Date();
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  ngOnInit(): void {
  
  }

  send() {
    let dto : DealPromotionDTO = new DealPromotionDTO(this.text, this.option == 1 ? true : false, new Date(this.startDate.value), new Date(this.endDate.value));
    console.log(dto);
  }

}
