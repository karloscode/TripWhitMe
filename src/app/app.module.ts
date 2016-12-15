import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { AppComponent , PageNotFoundComponent } from './app.component';
//import { UsersControlComponent } from './users.component'
//import { UsersFormComponent } from './users-form.component';
//import { UsersLogoutComponent } from  './userslogout.component';
import { TripsComponent } from './trip/trips.component';
import { TripDetailComponent } from './trip/trip-detail.component';
import { TripsFormComponent } from './trip/trips-form.component';
import { AngularFireModule, 
         FIREBASE_PROVIDERS,
         AngularFire,
         AuthMethods,
         AuthProviders } from 'angularfire2';
//import { UserService } from './user.service';
import { AuthModule } from './auth/auth.module';
import { DashModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';
import { TripService } from './trip/trip.service';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDmQkO9gm5nJfrCsbr3I3esjxk-Fg6La2o",
    authDomain: "test-7e1d0.firebaseapp.com",
    databaseURL: "https://test-7e1d0.firebaseio.com",
    storageBucket: "test-7e1d0.appspot.com",
    messagingSenderId: "981841855176"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig ,firebaseAuthConfig),
    FormsModule, AppRouting, AuthModule, DashModule
  ],
  declarations: [ AppComponent ,TripsComponent, TripDetailComponent , 
  TripsFormComponent , HomeComponent ,    PageNotFoundComponent
  ],
  providers: [ TripService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}