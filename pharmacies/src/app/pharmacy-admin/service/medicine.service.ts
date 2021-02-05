import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { MedicineToOrderDTO } from '../DTOs/medicine-to-order-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<MedicineToOrderDTO[]> {
    return this.http.get<MedicineToOrderDTO[]>(Constants.getAllMedicinesForPharmacyAdminUrl, {withCredentials : true});
  }
}
