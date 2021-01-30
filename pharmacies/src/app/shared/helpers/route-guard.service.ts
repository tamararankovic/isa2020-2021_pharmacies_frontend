import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/unauthenticated-user/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate  {

  constructor(public authService: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles : string[] = route.data.expectedRoles;    
    if (!this.authService.isAuthenticated() || !expectedRoles.includes(this.authService.getRole())) {
      if (this.authService.getRole() != null){
        this.router.navigate([ this.authService.getRole().toLowerCase().replace('_', '-')]); }
      else {
        this.router.navigate(['']);
      }
      return false;
    }
    return true;
  }
}
