import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable , AuthProviders, AuthMethods } from 'angularfire2';
import { UserService } from './user.service';


@Component({

  selector: 'users-login',
  template:  `
  		<div class="form-group">
			<label for="email">Email</label>
			<input type="text" #email class="form-control" id="email" name="email"
			 placeholder="example@mail.com" required>
		</div>
		<div class="form-group">
			<label for="passwd">Password</label>
			<input type="Password" #passwd class="form-control" id="passwd"  name="passwd"
			 placeholder="123456"required>
		</div>
		<button (click)="login( email.value , passwd.value )">Login</button>
		   <router-outlet></router-outlet> `,
  styleUrls: ['app.component.css'],
})
export class UsersLoginComponent {
  email: string = "";
  passwd: string = "";
  auth: boolean = false;
 
  constructor(private userService: UserService, private router: Router) { }

  login(email , passwd){
  	console.log(email);
    this.userService.login( email , passwd );

    this.auth = true

    this.router.navigate(['/trips']);
  	}



}
