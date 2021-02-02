import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/constants'
import { SupplierDTO } from '../DTOs/supplier-dto';
import { AdminDTO } from '../DTOs/admin-dto';
import { PharmacyDTO } from '../DTOs/pharmacy-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http : HttpClient) { }

  registerSupplier(user : SupplierDTO){
    return this._http.post(Constants.registerSupplierUrl, user , {responseType: 'text', withCredentials: true})
  }
  registerAdmin(user : AdminDTO){
    return this._http.post(Constants.registerAdminUrl, user , {responseType: 'text', withCredentials: true})

  }
  registerPharmacy(user : PharmacyDTO){
    return this._http.post(Constants.registerPharmacyUrl, user , {responseType: 'text', withCredentials: true})

  }
}
