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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomePageComponent, PharmacistsComponent, DermatologistsComponent],
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
    FormsModule
  ]
})
export class PharmacyAdminModule { }
