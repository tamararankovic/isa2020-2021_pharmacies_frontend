import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
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

}
