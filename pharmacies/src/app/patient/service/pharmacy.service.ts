import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { PharmacyDTO } from 'src/app/system-admin/DTOs/pharmacy-dto';
import { MedicineInfoDto } from 'src/app/unauthenticated-user/DTOs/medicine-info-dto';
import { PharmacyAddAdminDTO } from 'src/app/system-admin/DTOs/pharmacy-add-admin-dto';
import { PharmacyInfoDto } from '../DTOs/pharmacy-info-dto';
import { ReservationDto } from '../DTOs/reservation-dto';
import { PharmacistAppointmentDto } from '../DTOs/pharmacist-appointment-dto';
import { PharamciesCounselingDto } from '../DTOs/pharamcies-counseling-dto';
import { PharmacistDTO } from 'src/app/pharmacy-admin/DTOs/pharmacist-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  public reservation: ReservationDto;
  constructor(private _http : HttpClient) { }

  getPharmacyInfo(pharmacyId) : Observable<PharmacyInfoDto> {
    return this._http.get<PharmacyInfoDto>(Constants.getPharmacyInfoUrl + pharmacyId, {withCredentials: true});
  }

  getPharmaciesForReservation(dto:MedicineInfoDto) : Observable<PharmacyDTO[]>{
    return this._http.post<PharmacyDTO[]>(Constants.patientPharmaciesByMedicineUrl, dto,{withCredentials: true})
  }

  getReservationInfo(){
    return this.reservation;
  }

  setReservationInfo(reservation){
    this.reservation = reservation;
  }
  getAllSubscribedPharmacies() : Observable<PharmacyAddAdminDTO[]>{
    return this._http.get<PharmacyAddAdminDTO[]>(Constants.getAllSubscribedPharmaciesUrl,  {responseType: 'json', withCredentials: true});
  }

  subscribeToPharmacy(pharmacyId) : Observable<string>{ 
    return this._http.get(Constants.subscribeToPharmacy + pharmacyId, {responseType: 'text', withCredentials: true});
  }
 
  getPharmaciesForCounseling(dto:PharmacistAppointmentDto) : Observable<PharamciesCounselingDto[]>{
    return this._http.post<PharamciesCounselingDto[]>(Constants.pharmaciesCounselingUrl,dto,{withCredentials: true});
  }

  getAvailablePharmacist(dto:PharmacistAppointmentDto) : Observable<PharmacistDTO[]>{
    return this._http.post<PharmacistDTO[]>(Constants.availablePharmacistsUrl,dto,{withCredentials: true});
  }

  saveApp(dto:PharmacistAppointmentDto) : Observable<string>{
    return this._http.post<string>(Constants.savePharmacistAppUrl,dto,{withCredentials: true});
  }
}
