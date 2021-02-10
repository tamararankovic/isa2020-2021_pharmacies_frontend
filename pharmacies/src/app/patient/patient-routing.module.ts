import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DermatologistsComponent } from '../pharmacy-admin/dermatologists/dermatologists.component';
import { PharmacistsComponent } from '../pharmacy-admin/pharmacists/pharmacists.component';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PharmacyPageComponent } from './pharmacy-page/pharmacy-page.component';
import { PharmaciesSearchPatientComponent } from './pharmacies-search-patient/pharmacies-search-patient.component';
import { ReservationsPageComponent } from './reservations-page/reservations-page.component';
import { MedicineSearchPatientComponent } from './medicine-search-patient/medicine-search-patient.component';
import { ReservMedicineComponent } from './reserv-medicine/reserv-medicine.component';
import { SubscribedPharmaciesComponent } from './subscribed-pharmacies/subscribed-pharmacies.component';
import { PharmacistCounselingComponent } from './pharmacist-counseling/pharmacist-counseling.component';
import { MedicineSpecificationComponent } from './medicine-specification/medicine-specification.component';
import { IncomingAppointmentsComponent } from './incoming-appointments/incoming-appointments.component';
import { UploadQrComponent } from './upload-qr/upload-qr.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { PharmacyComplaintComponent } from './pharmacy-complaint/pharmacy-complaint.component';
import { DermatologistComplaintComponent } from './dermatologist-complaint/dermatologist-complaint.component';
import { PharmacistComplaintComponent } from './pharmacist-complaint/pharmacist-complaint.component';

const routes: Routes = [
  {path: 'pharmacy-complaint', component: PharmacyComplaintComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'dermatologist-complaint', component: DermatologistComplaintComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'pharmacist-complaint', component: PharmacistComplaintComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'complaints', component: ComplaintsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'upload-qr', component: UploadQrComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'med-specification/:id', component: MedicineSpecificationComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT", "SYSTEM_ADMIN", "DERMATOLOGIST", "PHARMACIST","PHARMACY_ADMIN"]}},
  {path: 'subscribed-pharmacies', component: SubscribedPharmaciesComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'dermatologists', component: DermatologistsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'pharmacists', component: PharmacistsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'pharmacist-counseling', component: PharmacistCounselingComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'pharmacy-search', component: PharmaciesSearchPatientComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'medicine-reservations', component: ReservationsPageComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'incoming-appointments', component: IncomingAppointmentsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'make-reservation', component: ReservMedicineComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT"]}},
  {path: 'medicine-search', component: MedicineSearchPatientComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PATIENT",  "SYSTEM_ADMIN", "DERMATOLOGIST", "PHARMACIST","PHARMACY_ADMIN"]}},
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
