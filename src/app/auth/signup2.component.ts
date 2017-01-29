import { Component, Inject, ViewChild , NgModule } from '@angular/core';
import { AngularFire, FirebaseApp } from 'angularfire2';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'profile',
  templateUrl: './signup2.component.html'
})

export class Signup2Component { 
  public auth: any;
  avatares: string[];
  selectedAvatar: string = "./assets/avataricon1.png";
  avatar: string;

  
  constructor(@Inject(FirebaseApp) firebaseApp: any , private router: Router , private _flashMessagesService: FlashMessagesService) {
    this.auth = firebaseApp.auth();
    console.log(this.auth);
    this.avatares = ["./assets/avataricon1.png","./assets/avataricon2.png","./assets/avataricon3.png","./assets/avataricon4.png","./assets/avataricon5.png","./assets/avataricon6.png"]
  }

  ngOnInit() {
    
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
          this._flashMessagesService.grayOut(true);
          this._flashMessagesService.show('User Created!', { cssClass: 'alert-success', timeout: 3000 });
          this.router.navigate(['/']);
        })
        .catch((error) => {
          this._flashMessagesService.grayOut(true);
          this._flashMessagesService.show('Error:'+ error, { cssClass: 'alert-danger', timeout: 3000 });
          console.log(error);
        })
    }
  }


}
