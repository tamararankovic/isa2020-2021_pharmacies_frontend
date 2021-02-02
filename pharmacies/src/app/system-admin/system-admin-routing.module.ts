import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterSupplierComponent } from './register-supplier/register-supplier.component';

const routes: Routes = [
  {path: 'supplier', component: RegisterSupplierComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SYSTEM_ADMIN"]}},
  {path: '', component: HomePageComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SYSTEM_ADMIN"]}},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAdminRoutingModule { }
