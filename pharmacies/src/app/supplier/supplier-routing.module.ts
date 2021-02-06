import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { GiveOfferComponent } from './give-offer/give-offer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';

const routes: Routes = [
  {path: 'update-offer/:idOffer', component: UpdateOfferComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["SUPPLIER"]}},
  {path: 'add-offer/:id', component: AddOfferComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["SUPPLIER"]}},
  {path: 'medicine/:id', component: MedicineDetailsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["SUPPLIER"]}},
  {path: 'offer', component: GiveOfferComponent , canActivate: [RouteGuardService], data: { expectedRoles: ["SUPPLIER"]}},
  {path: 'profile', component: ProfileComponent , canActivate: [RouteGuardService], data: { expectedRoles: ["SUPPLIER"]}},
  {path: '', component: HomePageComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["SUPPLIER"]}},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
