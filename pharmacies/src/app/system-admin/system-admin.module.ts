import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SystemAdminRoutingModule
  ]
})
export class SystemAdminModule { }
