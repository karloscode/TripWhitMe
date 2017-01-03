import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TripsComponent } from './trip/trips.component';
import { TripsFormComponent } from './trip/trips-form.component';
import { LoginComponent, SignupComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth-guard.service';
import { PageNotFoundComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: TripsComponent },
  { path: 'addtrip', component: TripsFormComponent } ,
  { path: '**', component: PageNotFoundComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
