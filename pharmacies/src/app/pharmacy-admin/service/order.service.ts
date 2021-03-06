import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { NewOrderDTO } from '../DTOs/new-order-dto';
import { OrderDTO } from '../DTOs/order-dto';
import { OrderWinnerDTO } from '../DTOs/order-winner-dto';
import { UpdateOrderDTO } from '../DTOs/update-order-dto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  create(dto : NewOrderDTO) {
    return this.http.post(Constants.newOrderUrl, dto, {withCredentials : true});
  }

  getAll() : Observable<OrderDTO[]> {
    return this.http.get<OrderDTO[]>(Constants.getOrdersUrl, {withCredentials : true});
  }

  chooseWinner(dto : OrderWinnerDTO) {
    return this.http.post(Constants.chooseOrderWinnerUrl, dto, {withCredentials : true});
  }

  update(dto : UpdateOrderDTO) {
    return this.http.post(Constants.updateOrderUrl, dto, {withCredentials : true});
  }

  delete(id : number) {
    return this.http.post(Constants.deleteOrderUrl + id, null, {withCredentials : true});
  } 
}
