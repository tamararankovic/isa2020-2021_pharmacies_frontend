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
import { MedQuanDTO } from '../DTOs/med-quan-dto';
import { MedicineDetailsDTO } from '../DTOs/med-details-dto';
import { SaveAppDTO } from '../DTOs/save-app-dto';
import { AppAvailableDTO } from 'src/app/pharmacist/DTOs/app-available-dto';
import { ExistingAppDTO } from '../DTOs/existing-app-dto';
import { AppWeekDTO } from 'src/app/pharmacist/DTOs/app-week-dto';
import { AppYearDTO } from 'src/app/pharmacist/DTOs/app-year-dto';
import { AppMonthDTO } from 'src/app/pharmacist/DTOs/app-month-dto';
import { PharmAppDTO } from 'src/app/pharmacist/DTOs/pharm-app-dto';
import { DermPharmacyDTO } from '../DTOs/derm-pharmacy-dto';
import { LeaveViewDTO } from 'src/app/pharmacist/DTOs/leave-view-dto';
import { LeaveDTO } from 'src/app/pharmacist/DTOs/leave-dto';

@Injectable({
  providedIn: 'root'
})
export class DermService {

  public appointmentId : number = 0;
  public chosenAppointmnetDto : number = 0;

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

  checkMedicineQuantity(medicineId : number, appointmentId : number) : Observable<MedQuanDTO>{
    return this._http.get<MedQuanDTO>(Constants.dermatologistCheckMedicineQuantityUrl + "/" + medicineId + "/" + appointmentId, {withCredentials: true});
  }

  getCompatibleMedicine(medicineId : number) : Observable<MedicineDTO[]>{
    return this._http.get<MedicineDTO[]>(Constants.dermatologistCompatibleUrl + "/" + medicineId, {withCredentials: true});
  }

  getMedicineDetails(medicineId : number) : Observable<MedicineDetailsDTO>{
    return this._http.get<MedicineDetailsDTO>(Constants.dermatologistMedicineDetailsUrl + "/" + medicineId, {withCredentials: true});
  }

  isAppointmentAvailable(dto : SaveAppDTO) : Observable<AppAvailableDTO>{
    return this._http.post<AppAvailableDTO>(Constants.dermatologistCheckAppointmentUrl, dto, {withCredentials: true});
  }

  saveAppointment(dto : SaveAppDTO){
    return this._http.post(Constants.dermatologistSaveAppointmentUrl, dto, {withCredentials: true});
  }

  getExistingAppointments(appointmentId : number) : Observable<ExistingAppDTO[]>{
    return this._http.get<ExistingAppDTO[]>(Constants.dermatologistExistingAppointmentsUrl + "/" + appointmentId, {withCredentials: true});
  }

  saveExistingAppointment(appointmentId : number, newAppointmentId : number){
    return this._http.get(Constants.dermatologistSaveExistingAppointmentUrl + "/" + appointmentId + "/" + newAppointmentId, {withCredentials: true});
  }

  getByWeek(dto : AppWeekDTO, pharmacyId : number) : Observable<PharmAppDTO[]>{
    return this._http.post<PharmAppDTO[]>(Constants.dermatologistWeekUrl + "/" + pharmacyId, dto, {withCredentials: true});
  }

  getByMonth(dto : AppMonthDTO, pharmacyId : number) : Observable<PharmAppDTO[]>{
    return this._http.post<PharmAppDTO[]>(Constants.dermatologistMonthUrl + "/" + pharmacyId, dto, {withCredentials: true});
  }

  getByYear(dto : AppYearDTO, pharmacyId : number) : Observable<PharmAppDTO[]>{
    return this._http.post<PharmAppDTO[]>(Constants.dermatologistYearUrl + "/" + pharmacyId, dto, {withCredentials: true});
  }

  notPresent(){
    return this._http.get(Constants.dermatologistNotPresentUrl + "/" + this.chosenAppointmnetDto, {withCredentials: true});
  }

  getAllPharmacies() : Observable<DermPharmacyDTO[]>{
    return this._http.get<DermPharmacyDTO[]>(Constants.dermatologistPharmaciesUrl, {withCredentials: true});
  }

  allLeave() : Observable<LeaveViewDTO[]>{
    return this._http.get<LeaveViewDTO[]>(Constants.dermatologistAllLeaveUrl, {withCredentials: true});
  }

  newLeave(dto : LeaveDTO){
    return this._http.post(Constants.dermatologistNewLeaveUrl, dto, {withCredentials: true});
  }
}
