import { Component , OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from './trip';
import { TripService } from './trip.service';
import { AngularFire, FirebaseApp } from 'angularfire2';
import { TripsFormComponent } from './trips-form.component';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'trips',
  templateUrl: 'trips.component.html',
})
export class TripsComponent implements OnInit {
  selectedTrip: Trip;
  trips: FirebaseListObservable<any[]>;
  path: string ='/trips';
  public userData: any;

  
  constructor(@Inject(FirebaseApp) firebaseApp: any , private tripService: TripService ,
    private af: AngularFire ) {
   }

 	ngOnInit(): void {
    this.trips = this.tripService.getTrips();
    this.af.auth.subscribe(auth => {
          this.userData = auth;
        });
  }


  new_Trip(newTrip){

      /* if(this.userData.valid) {
      console.log(this.userData.value);
      this.authF.currentUser.updateProfile(this.userData.value)
        .then((success) => {
          console.log('Success', success);
        })
        .catch((error) => {
          console.log(error);
        })
    }*/
    newTrip.uid = this.userData.auth.uid;
    newTrip.userName = this.userData.auth.displayName;
    newTrip.photoUrl = this.userData.auth.photoURL;
    this.tripService.newTrip(newTrip);
  }

}
