import { Component , OnInit , Inject} from '@angular/core';
import { TripService } from './trip.service';
import { AngularFire, FirebaseApp } from 'angularfire2';
import { TripsFormComponent } from './trips-form.component';
import { Router } from '@angular/router';
import { GoogleplaceDirective } from '../directives/googleplace.directive';
import { Trip } from './trip'

@Component({
  selector: 'addtrip',
  templateUrl: 'addtrip.component.html',

})
export class AddTripComponent implements OnInit {
  public userData: any;

  constructor(@Inject(FirebaseApp) firebaseApp: any , private tripService: TripService ,
    private af: AngularFire , private router: Router ) {
   }

 	ngOnInit(): void {
    this.af.auth.subscribe(auth => {
          this.userData = auth;
        });
  }

  newTrip(newTrip: Trip){
    newTrip.uid = this.userData.auth.uid;
    newTrip.userName = this.userData.auth.displayName;
    newTrip.photoUrl = this.userData.auth.photoURL;
    newTrip.trippers = [];
    this.tripService.newTrip(newTrip);
    this.router.navigate(['/']);
  }


}
