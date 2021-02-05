import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { MedicineInPharmacyDTO } from '../DTOs/medicine-in-pharmacy-dto';
import { MedicineToOrderDTO } from '../DTOs/medicine-to-order-dto';
import { SearchMedicineDTO } from '../DTOs/search-medicine-dto';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<MedicineToOrderDTO[]> {
    return this.http.get<MedicineToOrderDTO[]>(Constants.getAllMedicinesForPharmacyAdminUrl, {withCredentials : true});
  }

  getAllOffered() : Observable<MedicineInPharmacyDTO[]> {
    return this.http.get<MedicineInPharmacyDTO[]>(Constants.getAllOfferedMedicinesForPharmacyAdminUrl, {withCredentials : true});
  }

  getAllNotOffered() : Observable<MedicineToOrderDTO[]> {
    return this.http.get<MedicineToOrderDTO[]>(Constants.getAllNotOfferedMedicinesForPharmacyAdminUrl, {withCredentials : true});
  }

  search(dto : SearchMedicineDTO) : Observable<MedicineInPharmacyDTO[]> {
    return this.http.post<MedicineInPharmacyDTO[]>(Constants.searchMedicinesInPharmacyUrl, dto, {withCredentials : true});
  }
}
