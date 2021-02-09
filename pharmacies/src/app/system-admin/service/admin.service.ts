import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/constants'
import { SupplierDTO } from '../DTOs/supplier-dto';
import { AdminDTO } from '../DTOs/admin-dto';
import { PharmacyDTO } from '../DTOs/pharmacy-dto';
import { DermatologistDTO } from '../DTOs/dermatologist-dto';
import { PharmacyAddAdminDTO } from '../DTOs/pharmacy-add-admin-dto';
import { Observable } from 'rxjs';
import { PharmacyAdminRegisterDTO } from '../DTOs/pharmacy-admin-register-dto';
import { MedicineCodeDTO } from '../DTOs/medicine-code-dto';
import { MedicineDTO } from '../DTOs/medicine-dto';
import { AllComplaintsDTO } from '../DTOs/all-complaints-dto';
import { AnswerOnComplaintDTO } from '../DTOs/answer-on-complaint-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http : HttpClient) { }

  registerSupplier(user : SupplierDTO){
    return this._http.post(Constants.registerSupplierUrl, user , {responseType: 'text', withCredentials: true})
  }
  registerAdmin(user : AdminDTO){
    return this._http.post(Constants.registerAdminUrl, user , {responseType: 'text', withCredentials: true})

  }
  registerPharmacy(user : PharmacyDTO){
    return this._http.post(Constants.registerPharmacyUrl, user , {responseType: 'text', withCredentials: true})
   
  }
  registerDermatologist(user: DermatologistDTO){
    return this._http.post(Constants.registerDermatologistUrl, user,  {responseType: 'text', withCredentials: true});
  }

  addNewMedicine(user: MedicineDTO){
    return this._http.post(Constants.addNewMedicineUrl, user,  {responseType: 'text', withCredentials: true});
  }


  getAllPharmacies() : Observable<PharmacyAddAdminDTO[]>{
    return this._http.get<PharmacyAddAdminDTO[]>(Constants.getAllPharmaciesUrl,  {responseType: 'json', withCredentials: true});
  }
  getAllMedicines() : Observable<MedicineCodeDTO[]>{
    return this._http.get<MedicineCodeDTO[]>(Constants.getAllMedicinesUrl,  {responseType: 'json', withCredentials: true});
  }

  registerPharmacyAdmin(user : PharmacyAdminRegisterDTO){
    return this._http.post(Constants.registerPharmacyAdminUrl, user , {responseType: 'text', withCredentials: true})

  }
  getAllComplaints() : Observable<AllComplaintsDTO[]>{
    return this._http.get<AllComplaintsDTO[]>(Constants.getAllComplaintsUrl,  {responseType: 'json', withCredentials: true});

  }
  answerOnComplaint(answer : AnswerOnComplaintDTO){
    return this._http.post(Constants.answerOnComplaintUrl, answer , {responseType: 'text', withCredentials: true})

  }
}
