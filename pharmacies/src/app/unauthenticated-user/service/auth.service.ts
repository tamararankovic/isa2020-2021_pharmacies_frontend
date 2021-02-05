import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/constants'
import { UserLoginDTO } from '../DTOs/user-login-dto';
import {UserRegisterDto} from '../DTOs/user-register-dto';
import { UserPasswordChangeDto } from '../DTOs/user-password-change-dto';
import { Observable } from 'rxjs';
import { PharmacyInfoDto } from 'src/app/patient/DTOs/pharmacy-info-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { }

  public loginPageDisplayed = false;
  public registerPageDisplayed = false;

  login(user : UserLoginDTO) {
    return this._http.post(Constants.loginUrl, user, {responseType: 'text', withCredentials: true});
  }
  register(user : UserRegisterDto){
    return this._http.post(Constants.registerUrl, user , {responseType: 'text', withCredentials: true})
  }
  changePassword(user : UserPasswordChangeDto){
    return this._http.post(Constants.changePasswordUrl, user,  {responseType: 'text', withCredentials: true} )
  }
  setRole(role : string) {
    localStorage.setItem('role', role);
  }

  getRole() : string {
    return localStorage.getItem('role');
  }

  isAuthenticated() : boolean {
    return this.getRole() != null;
  }


  logOut() {
    localStorage.removeItem('role');
    this._http.post(Constants.logoutUrl, null, {withCredentials: true}).subscribe(
      (val) => console.log("uspesno")
    )
  }
}
