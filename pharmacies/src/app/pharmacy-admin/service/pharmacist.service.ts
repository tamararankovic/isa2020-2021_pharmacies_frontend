import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { NewPharmacistDTO } from '../DTOs/new-pharmacist-dto';
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

  search(fullName : string) {
    return this.http.get<PharmacistDTO[]>(Constants.searchPharmUrl + fullName, {withCredentials : true});
  }

  create(pharmacist : NewPharmacistDTO) {
    return this.http.post(Constants.newPharmUrl, pharmacist, {withCredentials : true});
  }
}
