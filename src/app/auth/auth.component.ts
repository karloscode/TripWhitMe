import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseApp } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  templateUrl: './signup.component.html'
})

export class SignupComponent {
  public error: any;

  constructor(private af: AngularFire , private router: Router , private _flashMessagesService: FlashMessagesService) {  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        console.log(success);
          this._flashMessagesService.grayOut(true);
          this._flashMessagesService.show('Success!', { cssClass: 'alert-success', timeout: 3000 });
          this.router.navigate(['/signup2'])
      }).catch(
        (err) => {
          console.log(err);
          this._flashMessagesService.grayOut(true);
          this._flashMessagesService.show(''+err, { cssClass: 'alert-danger', timeout: 5000 });
          this.router.navigate(['/signup']);
      })
    } else {
      this.error = 'Your form is invalid';
    }
  }
}

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  public error: any;

  constructor(private af: AngularFire, private router: Router , private _flashMessagesService: FlashMessagesService) { }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          console.log(success);
          this._flashMessagesService.grayOut(true);
          this._flashMessagesService.show('Success!', { cssClass: 'alert-success', timeout: 3000 });
          this.router.navigate(['/dashboard']);
      }).catch(
        (err) => {
          console.log(err);
          this._flashMessagesService.grayOut(true);
          this._flashMessagesService.show(''+err, { cssClass: 'alert-danger', timeout: 5000 });
          this.router.navigate(['/dashboard']);
      })
    } else {
      this.error = 'Your form is invalid';
    }
  }
}

@Component({
  templateUrl: './resetpassword.component.html'
})

export class ResetpassComponent {
  public auth: any;
  constructor(private af: AngularFire, @Inject(FirebaseApp) firebaseApp: any , private _flashMessagesService: FlashMessagesService) {
    this.auth = firebaseApp.auth()
    console.log(this.auth);
  }

  onSubmit(formData) {
     if(formData.valid) {
       console.log('Submission worked');
       this.auth.sendPasswordResetEmail(formData.value.email)
         .then( (response) => {
           console.log('Sent successfully');
           this._flashMessagesService.grayOut(true);
           this._flashMessagesService.show('Sent successfully!', { cssClass: 'alert-success', timeout: 3000 })
         })
         .catch( (error) => {
           console.log(error);
           this._flashMessagesService.grayOut(true);
           this._flashMessagesService.show(''+error, { cssClass: 'alert-danger', timeout: 5000 });
         })
     }
  }
}