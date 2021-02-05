import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { SchedulingComponent } from './scheduling/scheduling.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["DERMATOLOGIST"]}},
  {path: 'profile', component: ProfileComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["DERMATOLOGIST"]}},
  {path: 'search', component: PatientSearchComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["DERMATOLOGIST"]}},
  {path: 'report', component: ReportComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["DERMATOLOGIST"]}},
  {path: 'scheduling', component: SchedulingComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["DERMATOLOGIST"]}},
  {path: 'calendar', component: CalendarComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["DERMATOLOGIST"]}},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DermatologistRoutingModule { }
