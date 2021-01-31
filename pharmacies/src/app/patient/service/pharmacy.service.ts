import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { PharmacyInfoDto } from '../DTOs/pharmacy-info-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private _http : HttpClient) { }

  getPharmacyInfo(pharmacyId) : Observable<PharmacyInfoDto> {
    return this._http.get<PharmacyInfoDto>(Constants.getPharmacyInfoUrl + pharmacyId, {withCredentials: true});
  }
}
