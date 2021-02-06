import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { AllOffersDTO } from '../DTOs/all-offers-dto';
import { OfferDTO } from '../DTOs/offer-dto';
import { OfferUpdate } from '../DTOs/offer-update';
import { OrderDto } from '../DTOs/order-dto';
import { PasswordSupplierDTO } from '../DTOs/password-supplier-dto';
import { SupplierProfileDTO } from '../DTOs/supplier-profile-dto';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private _http : HttpClient) { }

  getSupplier() : Observable<SupplierProfileDTO> {
    return this._http.get<SupplierProfileDTO>(Constants.supplierProfileUrl, {withCredentials: true});
  }

  updateSupplier(dto : SupplierProfileDTO) : Observable<SupplierProfileDTO>{
    return this._http.post<SupplierProfileDTO>(Constants.supplierUpdateUrl, dto, {withCredentials: true});
  }

  changePassword(dto : PasswordSupplierDTO) {
    return this._http.post(Constants.supplierPasswordUrl, dto, {withCredentials: true});
  }
  getAllOrders() : Observable<OrderDto[]> {
    return this._http.get<OrderDto[]>(Constants.getOrdersSupplierUrl, {withCredentials : true});
  }
  createOffer(dto : OfferDTO) {
    return this._http.post(Constants.createOfferUrl, dto, {withCredentials : true});
  }
  getAllOffers() : Observable<AllOffersDTO[]> {
    return this._http.get<AllOffersDTO[]>(Constants.getAllOffersUrl, {withCredentials : true});
  }
  updateOffer(dto : OfferUpdate) : Observable<OfferUpdate>{
    return this._http.post<OfferUpdate>(Constants.supplierUpdateOfferUrl, dto, {withCredentials: true});
  }

 
}
