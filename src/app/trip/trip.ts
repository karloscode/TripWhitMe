import { Place } from "./place"
export class Trip {
 id: string;
 uid: string;
 from: Place;
 to: Place;
 map: string;
 date: string;
 userName: string;
 photoUrl: string;
 tripers: string[];
 isPlane: boolean;
 isRoad: boolean;
 isLowCost: boolean;
 isAny: boolean;

 constructor (uid:string, from: Place, to: Place, map: string, 
 	date: string, userName: string , photoUrl: string , trippers: string[] ,
 	isPlane: boolean , isRoad: boolean , isLowCost: boolean , isAny: boolean
 ){
 	this.uid = uid;
	this.from = from;
 	this.to = to;
 	this.map = map;
 	this.date = date;
 	this.userName = userName;
 	this.photoUrl = photoUrl;
 	this.tripers = trippers;
 	this.isPlane = isPlane;
 	this.isRoad = isRoad;
 	this.isLowCost = isLowCost;
 	this.isAny = isAny;


 }
}