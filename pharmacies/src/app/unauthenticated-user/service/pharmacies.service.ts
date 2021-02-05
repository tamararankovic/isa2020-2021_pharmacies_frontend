import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PharmacyInfoDto } from 'src/app/patient/DTOs/pharmacy-info-dto';
import { Constants } from 'src/app/shared/constants';
import { MedicineInfoDto } from '../DTOs/medicine-info-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmaciesService {

  constructor(private _http : HttpClient) { }

  getPharmacies(dto:PharmacyInfoDto) : Observable<PharmacyInfoDto[]>{
    return this._http.post<PharmacyInfoDto[]>(Constants.allPharmaciesUrl, dto);
  }

  getMedicine(dto:MedicineInfoDto) : Observable<MedicineInfoDto[]>{
    return this._http.post<MedicineInfoDto[]>(Constants.allMedicineUrl,dto);
  }

}
