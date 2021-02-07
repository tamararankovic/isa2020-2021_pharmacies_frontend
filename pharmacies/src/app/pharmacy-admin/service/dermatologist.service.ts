import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { DermatologistDTO } from '../DTOs/dermatologist-dto';
import { DermatologistToEmployDTO } from '../DTOs/dermatologist-to-employ-dto';
import { NewDermatologistDTO } from '../DTOs/new-dermatologist-dto';
import { PredefinedExaminationDTO } from '../DTOs/predefined-examination-dto';

@Injectable({
  providedIn: 'root'
})
export class DermatologistService {

  constructor(private http : HttpClient) { }

  getDermatologists() : Observable<DermatologistDTO[]> {
    return this.http.get<DermatologistDTO[]>(Constants.dermatologistsUrl, {withCredentials : true});
  }

  delete(id : number) {
    return this.http.post(Constants.deleteDermUrl + id, null, {withCredentials : true});
  }

  search(fullName : string) {
    return this.http.get<DermatologistDTO[]>(Constants.searchDermUrl + fullName, {withCredentials : true});
  }

  getDermatologistsToEmploy() {
    return this.http.get<DermatologistToEmployDTO[]>(Constants.dermToEmployUrl, {withCredentials : true});
  }

  postNewDermatologist(d : NewDermatologistDTO) {
    return this.http.post(Constants.newDermUrl, d, {withCredentials : true});
  }

  createExamination(dto : PredefinedExaminationDTO) {
    return this.http.post(Constants.createExamination, dto, {withCredentials : true});
  }
}
