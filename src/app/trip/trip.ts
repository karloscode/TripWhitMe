export class Trip {
 id: string;
 uid: string;
 from: string;
 to: string;
 map: string;
 date: string;
 userName: string;
 constructor (uid:string, from: string, to: string, map: string, date: string, userName: string){
 	this.uid = uid;
	this.from = from;
 	this.to = to;
 	this.map = map;
 	this.date = date;
 	this.userName = userName;
 }
}