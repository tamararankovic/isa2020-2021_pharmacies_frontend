import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PharmaciesSearchComponent } from './pharmacies-search/pharmacies-search.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'pharmacies', component: PharmaciesSearchComponent},
  {path: '', component: LandingPageComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnauthenticatedUserRoutingModule { }
export const routingComponents = [LoginPageComponent, RegisterPageComponent, PharmaciesSearchComponent, LandingPageComponent, PageNotFoundComponent]
