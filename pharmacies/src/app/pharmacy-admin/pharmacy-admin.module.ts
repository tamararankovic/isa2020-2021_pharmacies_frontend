import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyAdminRoutingModule } from './pharmacy-admin-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PharmacistsComponent } from './pharmacists/pharmacists.component';
import { DermatologistsComponent } from './dermatologists/dermatologists.component';


@NgModule({
  declarations: [HomePageComponent, PharmacistsComponent, DermatologistsComponent],
  imports: [
    CommonModule,
    PharmacyAdminRoutingModule
  ]
})
export class PharmacyAdminModule { }
