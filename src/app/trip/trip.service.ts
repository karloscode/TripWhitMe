import { Injectable } from '@angular/core';
import { Trip } from './trip'; 
import { AngularFire, FirebaseListObservable , AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class TripService{
	 items: FirebaseListObservable<any[]>;
	 path: string ='/trips';
 
 constructor(public af: AngularFire ) {
   this.items = af.database.list(this.path);
 
 }
 getTrips(){
	return this.items;
 }
    
 newTrip(trip){      
 	  this.items.push(trip);
 }

 updateTrippers(trip){
	 let id: string = trip.$key;
	 this.items.update(id , { trippers: trip.trippers });
 }

}