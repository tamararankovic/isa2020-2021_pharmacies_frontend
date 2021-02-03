import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PharmDTO } from '../DTOs/pharm-dto';
import { Constants } from 'src/app/shared/constants';
import { Observable } from 'rxjs';
import { PasswordDTO } from 'src/app/dermatologist/DTOs/password-dto';
import { PatientSearchDTO } from 'src/app/dermatologist/DTOs/patient-search-dto';
import { DermAppDTO } from 'src/app/dermatologist/DTOs/derm-app-dto';
import { MedicineDTO } from 'src/app/dermatologist/DTOs/medicine-dto';
import { DermReportDTO } from 'src/app/dermatologist/DTOs/derm-report-dto';
import { MedAllDTO } from 'src/app/dermatologist/DTOs/medicine-allergy-dto';
import { IsAllergicDTO } from 'src/app/dermatologist/DTOs/is-allergic-dto';
import { MedQuanDTO } from 'src/app/dermatologist/DTOs/med-quan-dto';
import { MedicineDetailsDTO } from 'src/app/dermatologist/DTOs/med-details-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmService {

  constructor(private _http : HttpClient) { }

  getPharmacist() : Observable<PharmDTO> {
    return this._http.get<PharmDTO>(Constants.pharmacistProfileUrl, {withCredentials: true});
  }

  updatePharmacist(dto : PharmDTO) : Observable<PharmDTO>{
    return this._http.post<PharmDTO>(Constants.pharmacistUpdateUrl, dto, {withCredentials: true});
  }

  changePassword(dto : PasswordDTO) {
    return this._http.post(Constants.pharmacistPasswordUrl, dto, {withCredentials: true});
  }

  searchPatients(dto : PatientSearchDTO) : Observable<PatientSearchDTO[]>{
    return this._http.post<PatientSearchDTO[]>(Constants.pharmacistSearchUrl, dto, {withCredentials: true});
  }

  getAppointmentData(appId : number) : Observable<DermAppDTO>{
    return this._http.get<DermAppDTO>(Constants.pharmacistAppointmentUrl + "/" + appId, {withCredentials: true});
  }

  getMedicineList() : Observable<MedicineDTO[]>{
    return this._http.get<MedicineDTO[]>(Constants.pharmacistGetMedicineUrl, {withCredentials: true});
  }

  saveReport(dto : DermReportDTO){
    return this._http.post(Constants.pharmacistSaveReportUrl, dto, {withCredentials: true});
  }

  checkAllergies(dto : MedAllDTO) : Observable<IsAllergicDTO>{
    return this._http.post<IsAllergicDTO>(Constants.pharmacistAllergicUrl, dto, {withCredentials: true});
  }

  checkMedicineQuantity(medicineId : number, appointmentId : number) : Observable<MedQuanDTO>{
    return this._http.get<MedQuanDTO>(Constants.pharmacistCheckMedicineQuantityUrl + "/" + medicineId + "/" + appointmentId, {withCredentials: true});
  }

  getCompatibleMedicine(medicineId : number) : Observable<MedicineDTO[]>{
    return this._http.get<MedicineDTO[]>(Constants.pharmacistCompatibleUrl + "/" + medicineId, {withCredentials: true});
  }

  getMedicineDetails(medicineId : number) : Observable<MedicineDetailsDTO>{
    return this._http.get<MedicineDetailsDTO>(Constants.dermatologistMedicineDetailsUrl + "/" + medicineId, {withCredentials: true});
  }
}
