import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PharmacyInfoDto } from 'src/app/patient/DTOs/pharmacy-info-dto';
import { Constants } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class PharmaciesService {

  constructor(private _http : HttpClient) { }

  getPharmacies(dto:PharmacyInfoDto) : Observable<PharmacyInfoDto[]>{
    return this._http.post<PharmacyInfoDto[]>(Constants.allPharmaciesUrl, dto);
  }
}
