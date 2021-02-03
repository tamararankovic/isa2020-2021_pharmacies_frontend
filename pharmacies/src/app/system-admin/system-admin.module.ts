import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterSupplierComponent } from './register-supplier/register-supplier.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterPharmacyComponent } from './register-pharmacy/register-pharmacy.component';
import { RegisterDermatologistComponent } from './register-dermatologist/register-dermatologist.component';
import { RegisterPharmacyAdminComponent } from './register-pharmacy-admin/register-pharmacy-admin.component';


@NgModule({
  declarations: [HomePageComponent, RegisterSupplierComponent, RegisterAdminComponent, RegisterPharmacyComponent, RegisterDermatologistComponent, RegisterPharmacyAdminComponent],
  imports: [
    CommonModule,
    SystemAdminRoutingModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
  ]
})
export class SystemAdminModule { }
