import { Component, Inject } from '@angular/core';
import { AngularFire, FirebaseApp } from 'angularfire2';



@Component({
  selector: 'profile',
  templateUrl: './signup2.component.html'
})

export class Signup2Component { 
  public auth: any;
  constructor(@Inject(FirebaseApp) firebaseApp: any) {
    this.auth = firebaseApp.auth();
    console.log(this.auth);
  }

  changeUser(userData) {
    if(userData.valid) {
      console.log(userData.value);
      this.auth.currentUser.updateProfile(userData.value)
        .then((success) => {
          console.log('Success', success);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }


}
