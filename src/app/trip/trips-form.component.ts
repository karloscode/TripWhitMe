import { Component, Output, EventEmitter } from '@angular/core';
import { Trip } from './trip';
@Component({
selector: 'trip-form',
templateUrl: "trips-form.component.html",
styleUrls: ['trips-form.component.css']
})
export class TripsFormComponent {


	@Output() modelEmitter = new EventEmitter();
	model = new Trip("none", "Spain", "EEUU", "default_map.png", "0","name");

	submitted = false;
	onSubmit(){
		this.submitted = true;
		this.modelEmitter.emit(this.model);
		//this.model = new Trip("none", "Spain", "EEUU", "default_map.png", 1232323);
	}
}	