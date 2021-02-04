import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterDermatologistComponent } from './register-dermatologist/register-dermatologist.component';
import { RegisterPharmacyAdminComponent } from './register-pharmacy-admin/register-pharmacy-admin.component';
import { RegisterPharmacyComponent } from './register-pharmacy/register-pharmacy.component';
import { RegisterSupplierComponent } from './register-supplier/register-supplier.component';

const routes: Routes = [
  {path: 'medicine', component: AddMedicineComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SYSTEM_ADMIN"]}},
  {path: 'pharmacyAdmin', component: RegisterPharmacyAdminComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SYSTEM_ADMIN"]}},
  {path: 'dermatologist', component: RegisterDermatologistComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SYSTEM_ADMIN"]}},
  {path: 'pharmacy', component: RegisterPharmacyComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SYSTEM_ADMIN"]}},
  {path: 'admin', component: RegisterAdminComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SYSTEM_ADMIN"]}},
  {path: 'supplier', component: RegisterSupplierComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SYSTEM_ADMIN"]}},
  {path: '', component: HomePageComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SYSTEM_ADMIN"]}},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAdminRoutingModule { }
