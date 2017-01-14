import { Component, Inject, ViewChild } from '@angular/core';
import { AngularFire, FirebaseApp } from 'angularfire2';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';




@Component({
  selector: 'profile',
  templateUrl: './signup2.component.html'
})

export class Signup2Component { 
  public auth: any;
  phothoURL: string = "./assets/avataricon1.png";
  showStyle: boolean = false;
  style: string = "";
  selectedPhotoURL: string ="";

/*  onsubmit(model: userData){ 

  }
*/  constructor(@Inject(FirebaseApp) firebaseApp: any) {
    this.auth = firebaseApp.auth();
    console.log(this.auth);
  }


toggle(event)
{
   console.log(event.target.id);
   this.phothoURL = event.target.id;
   this.selectedPhotoURL= event.target.id;

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
