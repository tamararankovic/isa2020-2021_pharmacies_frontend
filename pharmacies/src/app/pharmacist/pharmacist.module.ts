import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PharmacistRoutingModule } from './pharmacist-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProfileComponent } from './profile/profile.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ReportComponent } from './report/report.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { LeaveComponent } from './leave/leave.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [HomePageComponent, ProfileComponent, PatientSearchComponent, ReportComponent, ReservationComponent, SchedulingComponent, CalendarComponent, LeaveComponent],
  imports: [
    CommonModule,
    PharmacistRoutingModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatSelectModule
  ]
})
export class PharmacistModule { }
