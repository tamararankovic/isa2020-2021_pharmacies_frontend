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
import { PharmacistAppointmentDto } from '../DTOs/pharmacist-appointment-dto';
import { ShowAppointmentDto } from '../DTOs/show-appointment-dto';
import { ERecepyDTO } from '../DTOs/erecepy-dto';
import { DoctorRatingDto } from '../DTOs/doctor-rating-dto';
import { UserDTO } from '../DTOs/user-dto';
import { ComplaintDTO } from '../DTOs/complaint-dto';

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

  getIncomingApp() : Observable<ShowAppointmentDto[]>{
    return this._http.get<ShowAppointmentDto[]>(Constants.incomingAppointmentsUrl,{withCredentials: true} )
  }
  
  cancelPharmApp(dto : ShowAppointmentDto) : Observable<ShowAppointmentDto[]>{
    return this._http.post<ShowAppointmentDto[]>(Constants.cancelPharmAppUrl,dto,{withCredentials: true} )
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

  getAllPharmacists() : Observable<UserDTO[]>{
    return this._http.get<UserDTO[]>(Constants.getAllPharmacistsForComplaintUrl, {withCredentials: true})

  }
  getAllDermatologists() : Observable<UserDTO[]>{
    return this._http.get<UserDTO[]>(Constants.getAllDermatologistsForComplaintUrl, {withCredentials: true})

  }
  getAllPharmaciesUser() : Observable<PharmacyAddAdminDTO[]>{
    return this._http.get<PharmacyAddAdminDTO[]>(Constants.getAllPharmaciesUserUrl,  {responseType: 'json', withCredentials: true});
  }
  dermatologistComplaint(data : ComplaintDTO) : Observable<string>{
    return this._http.post<string>(Constants.dermatologistComplaintUrl, data, {withCredentials : true});
  }
  pharmacistComplaint(data : ComplaintDTO) : Observable<string>{
    return this._http.post<string>(Constants.pharmacistComplaintUrl, data, {withCredentials : true});
  }
  pharmacyComplaint(data : ComplaintDTO) : Observable<string>{
    return this._http.post<string>(Constants.pharmacyComplaintUrl, data, {withCredentials : true});
  }
  
  getPastCounseling() : Observable<ShowAppointmentDto[]>{
    return this._http.get<ShowAppointmentDto[]>(Constants.pastCounselingsUrl,{withCredentials: true} )
  }

  getPastApp() : Observable<ShowAppointmentDto[]>{
    return this._http.get<ShowAppointmentDto[]>(Constants.pastAppUrl,{withCredentials: true} )
  }

  getPharmForRating() : Observable<DoctorRatingDto[]>{
    return this._http.get<DoctorRatingDto[]>(Constants.pharmForRatingUrl,{withCredentials: true});
  }

  getDermForRating() : Observable<DoctorRatingDto[]>{
    return this._http.get<DoctorRatingDto[]>(Constants.dermForRatingUrl,{withCredentials: true});
  }

  getMedForRating() : Observable<DoctorRatingDto[]>{
    return this._http.get<DoctorRatingDto[]>(Constants.medForRatingUrl,{withCredentials: true});
  }

  saveMedRating(dto: DoctorRatingDto) : Observable<string>{
    return this._http.post<string>(Constants.savemedForRatingUrl,dto,{withCredentials: true});
  }
  saveDermRating(dto: DoctorRatingDto) : Observable<string>{
    return this._http.post<string>(Constants.savedermForRatingUrl,dto,{withCredentials: true});
  }
  savePharmRating(dto: DoctorRatingDto) : Observable<string>{
    return this._http.post<string>(Constants.savepharmForRatingUrl,dto,{withCredentials: true});
  }

  getPharmacyForRating() : Observable<DoctorRatingDto[]>{
    return this._http.get<DoctorRatingDto[]>(Constants.pharmacyForRatingUrl,{withCredentials: true});
  }
  savePharmacyRating(dto: DoctorRatingDto) : Observable<string>{
    return this._http.post<string>(Constants.savePharmacyForRatingUrl,dto,{withCredentials: true});
  }

  getPenalties() : Observable<number>{
    return this._http.get<number>(Constants.getPenaltiesUrl, {withCredentials: true});
  }
}
