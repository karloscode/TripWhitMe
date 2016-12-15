import { Component, Output, EventEmitter } from '@angular/core';
import { User } from './user';
import { UsersControlComponent } from './users.component';

@Component({
selector: 'users-form',
templateUrl: "users-form.component.html",
styleUrls: ['trips-form.component.css']
})
export class UsersFormComponent {
	@Output() modelEmitter = new EventEmitter();

	model = new User( "","example@mail.com" , "123456" , "name" , "avatar" );
	submitted = false;
	onSubmit(){
		this.submitted = true;
		this.modelEmitter.emit(this.model);
		this.model = new User( "","example@mail.com" , "123456" , "name" , "avatar" );
	}
}	