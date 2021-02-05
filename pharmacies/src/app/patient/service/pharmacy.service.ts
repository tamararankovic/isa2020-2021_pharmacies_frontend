import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { PharmacyAddAdminDTO } from 'src/app/system-admin/DTOs/pharmacy-add-admin-dto';
import { PharmacyInfoDto } from '../DTOs/pharmacy-info-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private _http : HttpClient) { }

  getPharmacyInfo(pharmacyId) : Observable<PharmacyInfoDto> {
    return this._http.get<PharmacyInfoDto>(Constants.getPharmacyInfoUrl + pharmacyId, {withCredentials: true});
  }
  getAllSubscribedPharmacies() : Observable<PharmacyAddAdminDTO[]>{
    return this._http.get<PharmacyAddAdminDTO[]>(Constants.getAllSubscribedPharmaciesUrl,  {responseType: 'json', withCredentials: true});
  }

  subscribeToPharmacy(pharmacyId) : Observable<string>{ 
    return this._http.get(Constants.subscribeToPharmacy + pharmacyId, {responseType: 'text', withCredentials: true});
  }
 
}
