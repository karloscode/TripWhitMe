import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable , AuthProviders, AuthMethods } from 'angularfire2';
import { UserService } from './user.service';


@Component({

  selector: 'users-logout',
  template:  `
		<button (click)="logout()">Logout</button>
		   <router-outlet></router-outlet> `,
  styleUrls: ['app.component.css'],
})
export class UsersLogoutComponent {
 
  constructor(private userService: UserService, private router: Router) { }

  logout(){
    this.userService.logout();
    this.router.navigate(['/trips']);
  	}



}
