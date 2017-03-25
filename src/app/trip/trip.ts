import { Place } from "./place"
export class Trip {

 constructor ( public uid: string , public from: Place , public to: Place , public map: string , 
 	public date: string , public userName: string , public photoUrl: string , public trippers: string[] ,
 	public isPlane: boolean , public isRoad: boolean , public isLowCost: boolean , public isAny: boolean ) {
 	this.uid = uid;
	this.from = from;
 	this.to = to;
 	this.map = map;
 	this.date = date;
 	this.userName = userName;
 	this.photoUrl = photoUrl;
 	this.trippers = trippers;
 	this.isPlane = isPlane;
 	this.isRoad = isRoad;
 	this.isLowCost = isLowCost;
 	this.isAny = isAny;
 }
}