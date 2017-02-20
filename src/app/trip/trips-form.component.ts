import { Component, Output, EventEmitter,  } from '@angular/core';
import { Trip } from './trip';
import { Place } from './place';
@Component({
	selector: 'trip-form',
	templateUrl: "trips-form.component.html",
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
 	 planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";


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
			"arc": -0.85, // this makes lines curved. Use value from -1 to 1
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
				"arc": -0.85,
      			"alpha": 0.3,
				"color": "#CC0000",
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
				"color": "#CC0000",
				"animateAlongLine": true,
				"lineId": "line1",
				"flipDirection": true,
				"loop": true,
				"scale": 0.05,
				"positionScale": 1.8
   				}, {	   
				"backgroundZoomsToTop": true,
				"linesAboveImages": true, 
				"pauseDuration": 0.2,
				"animationDuration": 2.5,
				"adjustAnimationSpeed": true,
				}
				]
		};
  

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
				"arc": -0.85,
				"color": "#CC0000",
				"alpha": 0.3,
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
				"color": "#CC0000",
				"animateAlongLine": true,
				"lineId": "line1",
				"flipDirection": true,
				"loop": true,
				"scale": 0.05,
				"positionScale": 1.8
				}, {	   
				"backgroundZoomsToTop": true,
				"linesAboveImages": true, 
				"pauseDuration": 0.2,
				"animationDuration": 2.5,
				"adjustAnimationSpeed": true,
				}
				]
		};
        // console.log("lat:"+this.placeTo.lat, "lng:"+this.placeTo.lng, "adress:"+this.placeTo.name);
         }
}