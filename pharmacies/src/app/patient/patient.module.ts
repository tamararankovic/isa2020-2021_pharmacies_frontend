import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
