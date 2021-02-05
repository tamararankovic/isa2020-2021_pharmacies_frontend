import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { ChangePasswordDTO } from '../DTOs/change-password-dto';
import { DealPromotionDTO } from '../DTOs/deal-promotion-dto';
import { PharmacyAdminDTO } from '../DTOs/pharmacy-admin-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmacyAdminService {

  constructor(private http : HttpClient) { }

  get() : Observable<PharmacyAdminDTO> {
    return this.http.get<PharmacyAdminDTO>(Constants.getPharmacyAdmin, {withCredentials : true});
  }

  update(dto : PharmacyAdminDTO) {
    return this.http.post(Constants.updatePharmacyAdmin, dto, {withCredentials : true});
  }

  changePassword(dto : ChangePasswordDTO) {
    return this.http.post(Constants.changePasswordPharmacyAdmin, dto, {withCredentials : true});
  }

  sendDealPromotion(dto : DealPromotionDTO) {
    return this.http.post(Constants.dealsPromotionsCreateUrl, dto, {withCredentials : true});
  }
}
