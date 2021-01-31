import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PharmDTO } from '../DTOs/pharm-dto';
import { Constants } from 'src/app/shared/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmService {

  constructor(private _http : HttpClient) { }

  getPharmacist() : Observable<PharmDTO> {
    return this._http.get<PharmDTO>(Constants.pharmacistProfileUrl, {withCredentials: true});
  }
}
