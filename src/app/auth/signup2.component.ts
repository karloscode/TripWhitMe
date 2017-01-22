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
  avatares: string[];
  selectedAvatar: string;
  avatar: string;

  constructor(@Inject(FirebaseApp) firebaseApp: any) {
    this.auth = firebaseApp.auth();
    console.log(this.auth);
    this.avatares = ["./assets/avataricon1.png","./assets/avataricon2.png","./assets/avataricon3.png","./assets/avataricon4.png","./assets/avataricon5.png","./assets/avataricon6.png"]
  }

  onSelect(avatar: string): void {
      this.selectedAvatar = avatar;
      this.avatar = avatar;
      /*console.log(avatar);*/
  }

  changeUser(userData) {
    userData.value.photoURL = this.avatar;
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
