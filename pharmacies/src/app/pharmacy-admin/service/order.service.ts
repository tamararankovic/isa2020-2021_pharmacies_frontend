import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { NewOrderDTO } from '../DTOs/new-order-dto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  create(dto : NewOrderDTO) {
    return this.http.post(Constants.newOrderUrl, dto, {withCredentials : true});
  }
}
