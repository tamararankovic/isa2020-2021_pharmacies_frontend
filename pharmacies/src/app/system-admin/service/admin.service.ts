import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/constants'
import { SupplierDTO } from '../DTOs/supplier-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http : HttpClient) { }

  registerSupplier(user : SupplierDTO){
    return this._http.post(Constants.registerSupplierUrl, user , {responseType: 'text', withCredentials: true})
  }
}
