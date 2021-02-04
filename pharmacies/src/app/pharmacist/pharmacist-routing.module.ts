import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SchedulingComponent } from './scheduling/scheduling.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PHARMACIST"]}},
  {path: 'profile', component: ProfileComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PHARMACIST"]}},
  {path: 'search', component: PatientSearchComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PHARMACIST"]}},
  {path: 'report', component: ReportComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PHARMACIST"]}},
  {path: 'reservation', component: ReservationComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PHARMACIST"]}},
  {path: 'scheduling', component: SchedulingComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PHARMACIST"]}},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacistRoutingModule { }
