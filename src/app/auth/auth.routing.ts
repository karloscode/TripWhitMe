import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, SignupComponent, ResetpassComponent } from './auth.component';
import { Signup2Component } from './signup2.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup2', component: Signup2Component },
  { path: 'password-reset', component: ResetpassComponent }
];

export const authRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
