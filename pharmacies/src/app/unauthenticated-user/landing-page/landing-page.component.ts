import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated) {
      this.router.navigate([this.authService.getRole().toLowerCase().replace('_', '-')]);
    }
  }

}
