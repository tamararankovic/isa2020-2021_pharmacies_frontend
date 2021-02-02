import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { PharmacistDTO } from '../DTOs/pharmacist-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

  constructor(private http : HttpClient) { }

  getPharmacists() : Observable<PharmacistDTO[]> {
    return this.http.get<PharmacistDTO[]>(Constants.pharmacistUrl, {withCredentials : true});
  }

  delete(id : number) {
    return this.http.post(Constants.deletePharmUrl + id, null, {withCredentials : true});
  }
}
