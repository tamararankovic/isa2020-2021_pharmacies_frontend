import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { PharmacyDTO } from 'src/app/system-admin/DTOs/pharmacy-dto';
import { MedicineInfoDto } from 'src/app/unauthenticated-user/DTOs/medicine-info-dto';
import { PharmacyInfoDto } from '../DTOs/pharmacy-info-dto';
import { ReservationDto } from '../DTOs/reservation-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  public reservation: ReservationDto
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
}
