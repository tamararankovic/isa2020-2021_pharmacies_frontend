import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PharmacyPageComponent } from './pharmacy-page/pharmacy-page.component';

const routes: Routes = [
  {path: 'pharmacy/:id', component: PharmacyPageComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PATIENT"]}},
  {path: '', component: HomePageComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PATIENT"]}},
  {path: 'profile', component: ProfileComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PATIENT"]}},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
