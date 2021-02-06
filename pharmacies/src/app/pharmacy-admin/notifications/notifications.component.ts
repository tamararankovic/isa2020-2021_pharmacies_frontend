import { Component, OnInit } from '@angular/core';
import { NotificationDTO } from '../DTOs/notification-dto';
import { PharmacyAdminService } from '../service/pharmacy-admin.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public notifications : NotificationDTO[] = [];

  constructor(private adminService : PharmacyAdminService) { }

  ngOnInit(): void {
    this.adminService.getNotifications().subscribe(
      (val) => { this.notifications = val; this.setDates(); }
    )
  }

  setDates() {
    for(let n of this.notifications) {
      n.timestamp = new Date(Number(n.timestamp[0]), Number(n.timestamp[1])-1, Number(n.timestamp[2]), Number(n.timestamp[3]), Number(n.timestamp[4]))
    }
    this.notifications = this.notifications.sort((a, b) => this.compareDates(a, b)).reverse();
  }

  compareDates(d1, d2) {
    if (d1 == d2) {
      return 0;
    }
    else if (d1 > d2) {
      return 1;
    }
    else {
      return -1;
    }
  }
}
