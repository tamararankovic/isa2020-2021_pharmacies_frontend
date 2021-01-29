import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DermatologistRoutingModule } from './dermatologist-routing.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    DermatologistRoutingModule
  ]
})
export class DermatologistModule { }
