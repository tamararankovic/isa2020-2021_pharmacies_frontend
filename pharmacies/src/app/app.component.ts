import { Component } from '@angular/core';
import { AuthService } from './unauthenticated-user/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pharmacies';

  constructor(public authService : AuthService) { }
}
