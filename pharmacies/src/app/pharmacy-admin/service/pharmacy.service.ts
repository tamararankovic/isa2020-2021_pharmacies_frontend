import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { PharmacyBasicInfoDTO } from '../DTOs/pharmacy-basic-info-dto';
import { PriceListDTO } from '../DTOs/price-list-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http : HttpClient) { }

  get() : Observable<PharmacyBasicInfoDTO> {
    return this.http.get<PharmacyBasicInfoDTO>(Constants.getPharmacyBasicInfoUrl, {withCredentials: true});
  }

  update(dto : PharmacyBasicInfoDTO) {
    return this.http.post(Constants.updatePharmacyBasicInfoUrl, dto, {withCredentials : true});
  }

  addMedicines(dto : number[]) {
    return this.http.post(Constants.addMedicinesToPharmacyUrl, dto, {withCredentials : true});
  }

  deleteMedicine(id : number) {
    return this.http.post(Constants.deleteMedicineUrl + id, null, {withCredentials : true});
  }

  getPriceList() : Observable<PriceListDTO> {
    return this.http.get<PriceListDTO>(Constants.getPriceListUrl, {withCredentials : true});
  }

  editPriceList(dto : PriceListDTO) {
    return this.http.post(Constants.editPriceListUrl, dto, {withCredentials : true});
  }
}
