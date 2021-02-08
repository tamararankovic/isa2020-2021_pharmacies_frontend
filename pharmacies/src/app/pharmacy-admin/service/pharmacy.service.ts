import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { PharmacyBasicInfoDTO } from '../DTOs/pharmacy-basic-info-dto';
import { PriceListDTO } from '../DTOs/price-list-dto';
import { StatisticalDataDTO } from '../DTOs/statistical-data-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http : HttpClient) { }

  get() : Observable<PharmacyBasicInfoDTO> {
    return this.http.get<PharmacyBasicInfoDTO>(Constants.getPharmacyBasicInfoUrl, {withCredentials: true});
  }

  update(dto : PharmacyBasicInfoDTO) {
    return this.http.post(Constants.updatePharmacyBasicInfoUrl, dto, {withCredentials : true});
  }

  addMedicines(dto : number[]) {
    return this.http.post(Constants.addMedicinesToPharmacyUrl, dto, {withCredentials : true});
  }

  deleteMedicine(id : number) {
    return this.http.post(Constants.deleteMedicineUrl + id, null, {withCredentials : true});
  }

  getPriceList() : Observable<PriceListDTO> {
    return this.http.get<PriceListDTO>(Constants.getPriceListUrl, {withCredentials : true});
  }

  editPriceList(dto : PriceListDTO) {
    return this.http.post(Constants.editPriceListUrl, dto, {withCredentials : true});
  }

  getPharmAppCountByMonth() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.pharmAppCountByMonthUrl, {withCredentials : true});
  }

  getPharmAppCountByQuarter() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.pharmAppCountByQuarterUrl, {withCredentials : true});
  }

  getPharmAppCountByYear() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.pharmAppCountByYearUrl, {withCredentials : true});
  }

  getDermAppCountByMonth() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.dermAppCountByMonthUrl, {withCredentials : true});
  }

  getDermAppCountByQuarter() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.dermAppCountByQuarterUrl, {withCredentials : true});
  }

  getDermAppCountByYear() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.dermAppCountByYearUrl, {withCredentials : true});
  }

  getAppCountByMonth() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.appCountByMonthUrl, {withCredentials : true});
  }

  getAppCountByQuarter() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.appCountByQuarterUrl, {withCredentials : true});
  }

  getAppCountByYear() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.appCountByYearUrl, {withCredentials : true});
  }

  getMedicineConsumptionByMonth() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.medConsumptionByMonthUrl, {withCredentials : true});
  }

  getMedicineConsumptionByQuarter() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.medConsumptionByQuarterUrl, {withCredentials : true});
  }

  getMedicineConsumptionByYear() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.medConsumptionByYearUrl, {withCredentials : true});
  }

  getIncomeFromPharmApp() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.incomePharmAppUrl, {withCredentials : true});
  }

  getIncomeFromDermApp() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.incomeDermAppUrl, {withCredentials : true});
  }

  getIncomeFromMedicines() : Observable<StatisticalDataDTO[]> {
    return this.http.get<StatisticalDataDTO[]>(Constants.incomeMedConsumptionUrl, {withCredentials : true});
  }
}
