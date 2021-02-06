import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { LeaveRequestDTO } from '../DTOs/leave-request-dto';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<LeaveRequestDTO[]> {
    return this.http.get<LeaveRequestDTO[]>(Constants.getLeaveRequest, {withCredentials : true});
  }

  accept(id : number) {
    return this.http.post(Constants.acceptLeaveRequest + id, null, {withCredentials : true});
  }

  decline(id : number, reasonDeclined : string) {
    return this.http.post(Constants.declineLeaveRequest + id, reasonDeclined, {withCredentials : true});
  }
}
