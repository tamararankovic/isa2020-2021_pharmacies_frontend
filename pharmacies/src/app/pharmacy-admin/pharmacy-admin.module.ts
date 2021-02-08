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
import { AdminBasicInfoComponent } from './admin-basic-info/admin-basic-info.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { DealsAndPromotionsComponent } from './deals-and-promotions/deals-and-promotions.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { NewMedicineComponent } from './new-medicine/new-medicine.component';
import { PriceListComponent } from './price-list/price-list.component';
import { EditPriceListComponent } from './edit-price-list/edit-price-list.component';
import { Dialog, LeaveRequestsComponent } from './leave-requests/leave-requests.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { NewExaminationComponent } from './new-examination/new-examination.component';
import { NotificationsComponent } from './notifications/notifications.component'; 
import { MatChipsModule } from '@angular/material/chips';
import { StatisticsComponent } from './statistics/statistics.component'; 
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [HomePageComponent, PharmacistsComponent, DermatologistsComponent, NewDermatologistComponent, NewPharmacistComponent, PharmacyBasicInfoComponent, AdminBasicInfoComponent, NewOrderComponent, OrdersComponent, OrderDetailsComponent, EditOrderComponent, DealsAndPromotionsComponent, MedicinesComponent, NewMedicineComponent, PriceListComponent, EditPriceListComponent, LeaveRequestsComponent, Dialog, NewExaminationComponent, NotificationsComponent, StatisticsComponent],
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
    MatPaginatorModule,
    MatDatepickerModule,
    MatDialogModule,
    MatChipsModule,
    NgxChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArX13dkqG1oKxB4wnrinrHr7pzuNrR2wQ',
      libraries: ['places']
    })
  ],
  entryComponents: [Dialog]
})
export class PharmacyAdminModule { }
