import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { AppComponent , PageNotFoundComponent } from './app.component';
import { TripsComponent } from './trip/trips.component';
import { TripDetailComponent } from './trip/trip-detail.component';
import { TripsFormComponent } from './trip/trips-form.component';
import { AddTripComponent } from './trip/addtrip.component';
import { AngularFireModule, FIREBASE_PROVIDERS,AngularFire,
         AuthMethods, AuthProviders } from 'angularfire2';

import { AuthModule } from './auth/auth.module';
import { DashModule } from './dashboard/dashboard.module';
import { TripService } from './trip/trip.service';
import { firebaseConfig } from './firebaseProject';
import { CollapseDirective } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';
import { AmChartsDirective } from "amcharts3-angular2/amcharts.directive";
import { GoogleplaceDirective } from './directives/googleplace.directive';
import { WorldMapComponent} from './maps/worldmap.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { TruncateText } from './pipes/truncateText.pipe';





export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig ,firebaseAuthConfig),
    FormsModule, AppRouting, AuthModule, DashModule , DropdownModule.forRoot() , FlashMessagesModule
  ],
  declarations: [ AppComponent ,TripsComponent, TripDetailComponent , 
  TripsFormComponent , PageNotFoundComponent , CollapseDirective , AddTripComponent , AmChartsDirective , 
  WorldMapComponent , GoogleplaceDirective , TruncateText
  ],
  providers: [ TripService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}