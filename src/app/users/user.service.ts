import { Injectable } from '@angular/core';
import { User } from './user';



import { AngularFire, FirebaseListObservable , AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class UserService{
	 users: FirebaseListObservable<any[]>;
   trips: FirebaseListObservable<any[]>;

	 pathUsers: string ='/users';
   pathTrips: string ='/trips';

   authUser: any;
   auth: boolean = false;

   static userEmail: string;
   static userName: string;


  constructor(public af: AngularFire) {
   this.users = af.database.list(this.pathUsers);
   this.trips = af.database.list(this.pathTrips);
   //this.af.auth.subscribe(auth => this.userAuth = auth);

   this.af.auth.subscribe(_user => {
      if(_user) {
        // user logged in
        this.authUser = _user;
        this.auth = true;
      }
      else {
        // user not logged in
        //this.authUser = {};
        this.auth = false;
      }
    });
 	}
   


  getUsers(){
	  return this.users;
  }

  create_User( user ) {
     this.af.auth.logout();
     this.af.auth.createUser({ email: user.email, password: user.passwd});
     this.login( user.email , user.passwd )
     user.uid = this.authUser.uid;


     console.log("new user " + user);
     this.users.push(user);

     
  } 

  login( newEmail , passwd ) {
     this.af.auth.login({ email: newEmail, password: passwd },{
  				provider: AuthProviders.Password,
  				method: AuthMethods.Password,});
     //UserService.email = newEmail;
     UserService.userEmail = newEmail;
     const queryObservable = this.af.database.list('/users', {
        query: {
        orderByChild: 'email',
        equalTo: UserService.userEmail
        }
      });
        //this.userUid = UserService.email;
        queryObservable.subscribe(queriedItems => {
        UserService.userName = queriedItems[0].name;
        //console.log(UserService.userEmail , UserService.userName)
      });
  }

  getUserUid() :string{
     return this.authUser.uid;
  } 

  newTrip(trip){

     if(this.auth) {
        // user logged in
       console.log(this.authUser);
       console.log("userName desde newtrip service: " + UserService.userName );
       trip.userName = UserService.userName;
       this.trips.push(trip);

      } else {
        // user not logged in´
        console.log("No userAuth");
      }
   
     //console.log("userName desde newtrip service: " + UserService.userName );

  }

  logout() {  
      this.af.auth.logout();
  }
    
 }