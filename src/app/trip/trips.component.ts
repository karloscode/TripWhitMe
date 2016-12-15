import { Component , OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from './trip';
import { TripService } from './trip.service';
import { AngularFire, FirebaseApp } from 'angularfire2';
//import { UserService } from '../users/user.service';

import { TripsFormComponent } from './trips-form.component';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'trips',
  templateUrl: 'trips.component.html',
  styleUrls: ['trip.component.css'],
})
export class TripsComponent implements OnInit {
  selectedTrip: Trip;
  trips: FirebaseListObservable<any[]>;
  path: string ='/trips';
  public userData: any;
  public auth: any;
  

  constructor(@Inject(FirebaseApp) firebaseApp: any , private tripService: TripService ,
    private af: AngularFire ) {
    this.auth = firebaseApp.auth();

   }

 	ngOnInit(): void {
    this.trips = this.tripService.getTrips();
    console.log(this.auth);
    this.af.auth.subscribe(auth => {
          console.log("oninit trips"+auth.uid);
          this.userData = auth;
          console.log("oninit trips userdata"+userData.value);
        });
  }


  onSelect(trip: Trip): void {
    	this.selectedTrip = trip;
  }

  new_Trip(newTrip){

       if(this.userData.valid) {
      console.log(this.userData.value);
      this.auth.currentUser.updateProfile(this.userData.value)
        .then((success) => {
          console.log('Success', success);
        })
        .catch((error) => {
          console.log(error);
        })
    }

     this.tripService.newTrip(newTrip);
  }

}
