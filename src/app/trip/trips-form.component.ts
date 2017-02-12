import { Component, Output, EventEmitter,  } from '@angular/core';
import { Trip } from './trip';
import { Place } from './place';
@Component({
	selector: 'trip-form',
	templateUrl: "trips-form.component.html",
	styleUrls: ['trips-form.component.css']
})
export class TripsFormComponent {
	placeFrom = new Place( 0 , 0 ,"");
	placeTo = new Place( 0 , 0 ,"");
	@Output() modelEmitter = new EventEmitter();
	model = new Trip("none" , this.placeFrom , this.placeTo , "default_map.png" , "0" , "name" , 
		"/assets/iconavatar1.png", [] , false , false , false , false );



	 id = "chartdiv";
   // svg path for target icon
   targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
  // svg path for plane icon
   planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

   chart = {
    "type": "map",
    "theme": "light",
    "dataProvider": {
    "map": "worldLow",
    "zoomLevel": 1.1,
    "zoomLongitude": 0,
    "zoomLatitude": 0,

    "lines": [ ],
    "images": [ ]
  },

  "areasSettings": {
    "unlistedAreasColor": "#286090",
    "unlistedAreasAlpha": 1
  },

  "imagesSettings": {
    "color": "#CC0000",
    "rollOverColor": "#CC0000",
    "selectedColor": "#000000"
  },

  "linesSettings": {
    "arc": -0.7, // this makes lines curved. Use value from -1 to 1
    "arrow": "middle",
    "color": "#CC0000",
    "alpha": 1,
    "arrowAlpha": 1,
    "arrowSize": 4
  },
  "zoomControl": {
    "gridHeight": 100,
    "draggerAlpha": 1,
    "gridAlpha": 0.2
  },

  "backgroundZoomsToTop": true,
  "linesAboveImages": true, 
  "pauseDuration": 0.2,
  "animationDuration": 2.5,
  "adjustAnimationSpeed": true,
  
  "export": {
    "enabled": false
  }
}
	 

	submitted = false;
	onSubmit(){
		this.submitted = true;
		this.modelEmitter.emit(this.model);
	}

	// get location by goggle place api
  	getAddressFrom(place:Object) {       
        var location = place['geometry']['location'];
        this.model.from.lat =  location.lat();
        this.model.from.lng = location.lng();
		this.model.from.name = place['formatted_address'];
		this.chart = JSON.parse(JSON.stringify(this.chart));
		this.chart.dataProvider = {
			"map": "worldLow",
			"zoomLevel": 1.1,
			"zoomLongitude": 0,
			"zoomLatitude": 0,

			"lines": [ {
				"id": "line1",
				"latitudes": [ this.placeFrom.lat, this.placeTo.lat ],
				"longitudes": [ this.placeFrom.lng, this.placeTo.lng ]
			} ],
			"images": [ {
				"svgPath": this.targetSVG,
				"title": this.placeFrom.name,
				"latitude": this.placeFrom.lat,
				"longitude": this.placeFrom.lng,
				"scale": 1.5
				}, {
				"svgPath": this.targetSVG,
				"title": this.placeTo.name,
				"latitude": this.placeTo.lat,
				"longitude": this.placeTo.lng,
				"scale": 1.5
				}, {
				"svgPath": this.planeSVG,
				"positionOnLine": 0,
				"color": "#585869",
				"animateAlongLine": true,
				"lineId": "line1",
				"flipDirection": true,
				"loop": true,
				"scale": 0.03,
				"positionScale": 1.8
   				}
				]
		};
  

        // console.log("lat:"+this.model.from.lat, "lng:"+this.model.from.lng, "adress:"+this.model.from.name );
         }

	getAddressTo(place:Object) {       
        var location = place['geometry']['location'];
        this.placeTo.lat =  location.lat();
        this.placeTo.lng = location.lng();
		this.placeTo.name = place['formatted_address'];
		this.chart = JSON.parse(JSON.stringify(this.chart));
		this.chart.dataProvider = {
			"map": "worldLow",
			"zoomLevel": 1.1,
			"zoomLongitude": 0,
			"zoomLatitude": 0,

			"lines": [ {
			"id": "line1",
			"latitudes": [ this.placeFrom.lat, this.placeTo.lat ],
			"longitudes": [ this.placeFrom.lng, this.placeTo.lng ]
			} ],
			"images": [ {
			"svgPath": this.targetSVG,
			"title": this.placeFrom.name,
			"latitude": this.placeFrom.lat,
			"longitude": this.placeFrom.lng,
			"scale": 1.5
			}, {
			"svgPath": this.targetSVG,
			"title": this.placeTo.name,
			"latitude": this.placeTo.lat,
			"longitude": this.placeTo.lng,
			"scale": 1.5
			}, {
			"svgPath": this.planeSVG,
			"positionOnLine": 0,
			"color": "#585869",
			"animateAlongLine": true,
			"lineId": "line1",
			"flipDirection": true,
			"loop": true,
			"scale": 0.03,
			"positionScale": 1.8
			}
			]
		};
        // console.log("lat:"+this.placeTo.lat, "lng:"+this.placeTo.lng, "adress:"+this.placeTo.name);
         }
}