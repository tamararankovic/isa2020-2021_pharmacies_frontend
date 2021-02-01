import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
 
=======
import { PharmacyPageComponent } from './pharmacy-page/pharmacy-page.component';
>>>>>>> master

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatTableModule } from '@angular/material/table';

import { AgmCoreModule } from '@agm/core';

@NgModule({
<<<<<<< HEAD
  declarations: [HomePageComponent, ProfileComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
=======
  declarations: [HomePageComponent, PharmacyPageComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
>>>>>>> master
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
<<<<<<< HEAD
    MatSnackBarModule

=======
    MatSnackBarModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArX13dkqG1oKxB4wnrinrHr7pzuNrR2wQ',
      libraries: ['places']
    })
>>>>>>> master
  ]
})
export class PatientModule { }
