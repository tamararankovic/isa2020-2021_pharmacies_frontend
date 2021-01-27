import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'dermatologist', loadChildren: () => import('./dermatologist/dermatologist.module').then(mod => mod.DermatologistModule)},
  {path: 'patient', loadChildren: () => import('./patient/patient.module').then(mod => mod.PatientModule)},
  {path: 'pharmacist', loadChildren: () => import('./pharmacist/pharmacist.module').then(mod => mod.PharmacistModule)},
  {path: 'pharmacy-admin', loadChildren: () => import('./pharmacy-admin/pharmacy-admin.module').then(mod => mod.PharmacyAdminModule)},
  {path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then(mod => mod.SupplierModule)},
  {path: 'system-admin', loadChildren: () => import('./system-admin/system-admin.module').then(mod => mod.SystemAdminModule)},
  {path: '', loadChildren: () => import('./unauthenticated-user/unauthenticated-user.module').then(mod => mod.UnauthenticatedUserModule)},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
