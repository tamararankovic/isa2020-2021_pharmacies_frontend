import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyAdminRoutingModule } from './pharmacy-admin-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PharmacistsComponent } from './pharmacists/pharmacists.component';
import { DermatologistsComponent } from './dermatologists/dermatologists.component';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NewDermatologistComponent } from './new-dermatologist/new-dermatologist.component';
import { MatCardModule } from '@angular/material/card';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NewPharmacistComponent } from './new-pharmacist/new-pharmacist.component';
import { PharmacyBasicInfoComponent } from './pharmacy-basic-info/pharmacy-basic-info.component'; 
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [HomePageComponent, PharmacistsComponent, DermatologistsComponent, NewDermatologistComponent, NewPharmacistComponent, PharmacyBasicInfoComponent],
  imports: [
    CommonModule,
    PharmacyAdminRoutingModule,
    MatButtonModule,
    MatRadioModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxSliderModule,
    MatCardModule,
    NgxMaterialTimepickerModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArX13dkqG1oKxB4wnrinrHr7pzuNrR2wQ',
      libraries: ['places']
    })
  ]
})
export class PharmacyAdminModule { }
