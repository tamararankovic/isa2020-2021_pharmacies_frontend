import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { SupplierRoutingModule } from './supplier-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { GiveOfferComponent } from './give-offer/give-offer.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { UpdateOfferComponent } from './update-offer/update-offer.component';


@NgModule({
  declarations: [HomePageComponent, ProfileComponent, GiveOfferComponent, MedicineDetailsComponent, AddOfferComponent, UpdateOfferComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule
  ]
})
export class SupplierModule { }
