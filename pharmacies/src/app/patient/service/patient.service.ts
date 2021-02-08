import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientDto } from '../DTOs/patient-dto';
import { Constants } from 'src/app/shared/constants';
import { PasswordDTO } from 'src/app/dermatologist/DTOs/password-dto';
import { ReservationDto } from '../DTOs/reservation-dto';
import { MedicineInfoDto } from 'src/app/unauthenticated-user/DTOs/medicine-info-dto';
import { PharmacyInfoDto } from '../DTOs/pharmacy-info-dto';
import { PharmacyAddAdminDTO } from 'src/app/system-admin/DTOs/pharmacy-add-admin-dto';
import { SearchMedicineByNameDTO } from '../DTOs/search-medicine-by-name-dto';
import { MedicineSearchDTO } from '../DTOs/medicine-search-dto';
import { ERecepyDTO } from '../DTOs/erecepy-dto';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private _http : HttpClient) { }

  getPatient() : Observable<PatientDto> {
    return this._http.get<PatientDto>(Constants.patientsProfileUrl, {withCredentials: true});
  }

  editPatient(dto : PatientDto) : Observable<PatientDto>{
    return this._http.post<PatientDto>(Constants.patientEditUrl, dto, {withCredentials: true});
  }

  changePassword(dto : PasswordDTO) {
    return this._http.post(Constants.patientPasswordUrl, dto, {withCredentials: true});
  }

  getMedicine(): Observable<string[]>{
    return this._http.get<string[]>(Constants.patientMedicineUrl, {withCredentials: true});
  }

  getResrvations() : Observable<ReservationDto[]>{
    return this._http.get<ReservationDto[]>(Constants.patientReservationsUrl, {withCredentials: true})
  }

  cancelReservation(dto : ReservationDto) : Observable<ReservationDto[]>{
    return this._http.post<ReservationDto[]>(Constants.patientCancelReservationUrl, dto,{withCredentials: true})
  }

  makeReservation(dto:ReservationDto){
    return this._http.post(Constants.patientMakeReservationUrl,dto,{withCredentials: true});
  }

  
  cancelSubscription(pharmacyId) : Observable<string> {
    return this._http.get(Constants.cancelSubscriptionDto + pharmacyId, {responseType: 'text' ,withCredentials: true});
  }

  getMedicinesByName(dto: SearchMedicineByNameDTO) : Observable<MedicineSearchDTO[]>{
    return this._http.post<MedicineSearchDTO[]>(Constants.searchMedicineByNameUrl, dto, {withCredentials: true});
  }
  sendQrCode(qr : FormData) : Observable<ERecepyDTO[]>{
    return this._http.post<ERecepyDTO[]>(Constants.sendQrCode, qr, {withCredentials: true});
  }
  choosePharmacy(pharmacy : ERecepyDTO){
    return this._http.post(Constants.choosePharmacyForEPrescription, pharmacy, {withCredentials : true});
  }

  sortByPrice(data : ERecepyDTO[]) : Observable<ERecepyDTO[]>{
    return this._http.post<ERecepyDTO[]>(Constants.sortByPrice, data, {withCredentials: true});
  }
  sortByRating(data : ERecepyDTO[]) : Observable<ERecepyDTO[]>{
    return this._http.post<ERecepyDTO[]>(Constants.sortByRating, data, {withCredentials: true});
  }
  sortByPharmacyAddress(data : ERecepyDTO[]) : Observable<ERecepyDTO[]>{
    return this._http.post<ERecepyDTO[]>(Constants.sortByPharmacyAddress, data, {withCredentials: true});
  }
  sortByPharmacyName(data : ERecepyDTO[]) : Observable<ERecepyDTO[]>{
    return this._http.post<ERecepyDTO[]>(Constants.sortByPharmacyName, data, {withCredentials: true});
  }
  

  
}
