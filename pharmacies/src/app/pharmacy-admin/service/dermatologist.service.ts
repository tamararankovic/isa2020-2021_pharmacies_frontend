import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { DermatologistDTO } from '../DTOs/dermatologist-dto';

@Injectable({
  providedIn: 'root'
})
export class DermatologistService {

  constructor(private http : HttpClient) { }

  getDermatologists() : Observable<DermatologistDTO[]> {
    return this.http.get<DermatologistDTO[]>(Constants.dermatologistsUrl, {withCredentials : true});
  }
}
