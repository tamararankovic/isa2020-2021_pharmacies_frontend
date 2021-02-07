import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PharmacyPageComponent } from './pharmacy-page/pharmacy-page.component';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { AgmCoreModule } from '@agm/core';
import { PharmaciesSearchPatientComponent } from './pharmacies-search-patient/pharmacies-search-patient.component';
import { ReservationsPageComponent } from './reservations-page/reservations-page.component';
import { MedicineSearchPatientComponent } from './medicine-search-patient/medicine-search-patient.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ReservMedicineComponent } from './reserv-medicine/reserv-medicine.component';
import { SubscribedPharmaciesComponent } from './subscribed-pharmacies/subscribed-pharmacies.component';
import { PharmacistCounselingComponent } from './pharmacist-counseling/pharmacist-counseling.component';

@NgModule({
  declarations: [HomePageComponent, ProfileComponent, PharmacyPageComponent, PharmaciesSearchPatientComponent, ReservationsPageComponent, MedicineSearchPatientComponent, ReservMedicineComponent, SubscribedPharmaciesComponent, PharmacistCounselingComponent],
 imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule ,
    MatSnackBarModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArX13dkqG1oKxB4wnrinrHr7pzuNrR2wQ',
      libraries: ['places']
    })
  ]
})
export class PatientModule { }
