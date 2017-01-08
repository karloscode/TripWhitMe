import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { authRouting } from './auth.routing';
import { LoginComponent, SignupComponent, ResetpassComponent } from './auth.component';
import { Signup2Component } from './signup2.component';

@NgModule({
  imports:      [ 
    authRouting,
    FormsModule,
    CommonModule
   ],
  declarations: [ 
    SignupComponent,
    Signup2Component,
    LoginComponent,
    ResetpassComponent
  ]
})
export class AuthModule { }
