import { Component , OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { UsersFormComponent } from './users-form.component';
import { AngularFire, FirebaseListObservable , AuthProviders, AuthMethods } from 'angularfire2';

@Component({

  selector: 'users-control',
  templateUrl: 'users.component.html',
  styleUrls: ['app.component.css']
})
export class UsersControlComponent {
  user: User;

  constructor(private userService: UserService) { }

  new_User(user){
    this.userService.create_User(user);
    console.log(user);
  	}



}
