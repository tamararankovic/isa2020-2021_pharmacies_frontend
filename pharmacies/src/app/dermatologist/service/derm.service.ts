import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DermDTO } from '../DTOs/derm-dto';
import { Constants } from 'src/app/shared/constants';
import { Observable } from 'rxjs';
import { PasswordDTO } from '../DTOs/password-dto';
import { PatientSearchDTO } from '../DTOs/patient-search-dto';
import { DermAppDTO } from '../DTOs/derm-app-dto';
import { MedicineDTO } from '../DTOs/medicine-dto';
import { DermReportDTO } from '../DTOs/derm-report-dto';
import { MedAllDTO } from '../DTOs/medicine-allergy-dto';
import { IsAllergicDTO } from '../DTOs/is-allergic-dto';

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

  searchPatients(dto : PatientSearchDTO) : Observable<PatientSearchDTO[]>{
    return this._http.post<PatientSearchDTO[]>(Constants.dermatologistSearchUrl, dto, {withCredentials: true});
  }

  getAppointmentData(appId : number) : Observable<DermAppDTO>{
    return this._http.get<DermAppDTO>(Constants.dermatologistAppointmentUrl + "/" + appId, {withCredentials: true});
  }

  getMedicineList() : Observable<MedicineDTO[]>{
    return this._http.get<MedicineDTO[]>(Constants.dermatologistGetMedicineUrl, {withCredentials: true});
  }

  saveReport(dto : DermReportDTO){
    return this._http.post(Constants.dermatologistSaveReportUrl, dto, {withCredentials: true});
  }

  checkAllergies(dto : MedAllDTO) : Observable<IsAllergicDTO>{
    return this._http.post<IsAllergicDTO>(Constants.dermatologistAllergicUrl, dto, {withCredentials: true});
  }
}
