import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AdminBasicInfoComponent } from './admin-basic-info/admin-basic-info.component';
import { DealsAndPromotionsComponent } from './deals-and-promotions/deals-and-promotions.component';
import { DermatologistsComponent } from './dermatologists/dermatologists.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { EditPriceListComponent } from './edit-price-list/edit-price-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { NewDermatologistComponent } from './new-dermatologist/new-dermatologist.component';
import { NewExaminationComponent } from './new-examination/new-examination.component';
import { NewMedicineComponent } from './new-medicine/new-medicine.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { NewPharmacistComponent } from './new-pharmacist/new-pharmacist.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { PharmacistsComponent } from './pharmacists/pharmacists.component';
import { PharmacyBasicInfoComponent } from './pharmacy-basic-info/pharmacy-basic-info.component';
import { PriceListComponent } from './price-list/price-list.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {path: 'statistics', component: StatisticsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'notifications', component: NotificationsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'new-examination', component: NewExaminationComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'leave-requests', component: LeaveRequestsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'edit-price-list', component: EditPriceListComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'price-list', component: PriceListComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'medicines', component: MedicinesComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'new-medicine', component: NewMedicineComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'deals-and-promotions', component: DealsAndPromotionsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'order/:id', component: OrderDetailsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'edit-order/:id', component: EditOrderComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'orders', component: OrdersComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'new-order', component: NewOrderComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'basic-info', component: AdminBasicInfoComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'pharmacy-basic-info', component: PharmacyBasicInfoComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'new-pharmacist', component: NewPharmacistComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
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
