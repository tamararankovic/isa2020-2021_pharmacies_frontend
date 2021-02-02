import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { DermatologistsComponent } from './dermatologists/dermatologists.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewDermatologistComponent } from './new-dermatologist/new-dermatologist.component';
import { PharmacistsComponent } from './pharmacists/pharmacists.component';

const routes: Routes = [
  {path: 'new-dermatologist', component: NewDermatologistComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'dermatologists', component: DermatologistsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'pharmacists', component: PharmacistsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: '', component: HomePageComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PHARMACY_ADMIN"]}},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyAdminRoutingModule { }
