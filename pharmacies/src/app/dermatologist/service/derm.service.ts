import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DermDTO } from '../DTOs/derm-dto';
import { Constants } from 'src/app/shared/constants';
import { Observable } from 'rxjs';
import { PasswordDTO } from '../DTOs/password-dto';

@Injectable({
  providedIn: 'root'
})
export class DermService {

  constructor(private _http : HttpClient) { }

  getDermatologist() : Observable<DermDTO> {
    return this._http.get<DermDTO>(Constants.dermatologistProfileUrl, {withCredentials: true});
  }

  updateDermatologist(dto : DermDTO) : Observable<DermDTO>{
    return this._http.post<DermDTO>(Constants.dermatologistUpdateUrl, dto, {withCredentials: true});
  }

  changePassword(dto : PasswordDTO) {
    return this._http.post(Constants.dermatologistPasswordUrl, dto, {withCredentials: true});
  }
}
