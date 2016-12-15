export class User {
 uid:string
 email: string;
 passwd: string;
 name: string;
 avatar: string;
 constructor ( uid:string , email:string , passwd:string , name: string, avatar: string ){
 	this.uid = uid;
 	this.email = email;
 	this.passwd = passwd;
	this.name = name;
 	this.avatar = avatar;
 }
}