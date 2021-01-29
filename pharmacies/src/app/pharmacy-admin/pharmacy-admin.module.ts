import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyAdminRoutingModule } from './pharmacy-admin-routing.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    PharmacyAdminRoutingModule
  ]
})
export class PharmacyAdminModule { }
