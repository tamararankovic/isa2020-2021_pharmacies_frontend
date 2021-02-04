import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent , canActivate: [RouteGuardService], data: { expectedRoles: ["SUPPLIER"]}},
  {path: '', component: HomePageComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SUPPLIER"]}},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
