import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UnauthenticatedUserRoutingModule } from './unauthenticated-user-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PharmaciesSearchComponent } from './pharmacies-search/pharmacies-search.component';
import { MedicineSearchComponent } from './medicine-search/medicine-search.component'; 

@NgModule({
  declarations: [LandingPageComponent, LoginPageComponent, RegisterPageComponent, PharmaciesSearchComponent, MedicineSearchComponent],
  imports: [
    CommonModule,
    UnauthenticatedUserRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSortModule,
    FormsModule,
    MatTableModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class UnauthenticatedUserModule { }
