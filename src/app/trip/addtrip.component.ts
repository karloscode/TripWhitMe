import { Component} from '@angular/core';
import { Trip } from './trip';
import { TripsFormComponent } from './trips-form.component';

@Component({
  selector: 'addtrip',
  template: '<trip-form *ngIf="(af.auth | async)" (modelEmitter)="new_Trip($event)"></trip-form>
',
})
export class AddTripComponent {
  

  constructor() {
   }

}
