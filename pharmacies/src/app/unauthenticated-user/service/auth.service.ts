import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/constants'
import { UserLoginDTO } from '../DTOs/user-login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { }

  public loginPageDisplayed = false;

  login(user : UserLoginDTO) {
    return this._http.post(Constants.loginUrl, user, {responseType: 'text', withCredentials: true});
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
      val => console.log("uspesno")
    );
  }
}
