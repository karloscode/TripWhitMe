import { Component, Input } from '@angular/core';
import { Trip } from './trip';
@Component({
  selector: 'trip-detail',
  template: `
    <div class="panel panel-default">
    <div class="panel-body">
    <div class="detail" *ngIf="trip">
      <h3>Trip info:</h3>
      <div><label>From: </label>{{trip.from}}</div>
      <div><label>To: </label>{{trip.to}}</div>
      <div><label>Map: </label><img src="./assets/{{trip.map}}" style="height:55px"></div>
      <div><label>Date: </label>{{trip.date}}</div>
    </div>
    </div>
    </div>
  `,styles: [`
      
    .detail {                                                
      padding: 1em 1em 1em 1em;
    }

    
  `]
})
export class TripDetailComponent {
  @Input()
  trip: Trip;
}