import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Message } from '../chat/message';
import { Observable } from 'rxjs';

@Injectable()
export class ChatService {

  constructor(private af: AngularFire) {
  }
//comprobar si hay mensajes primero
  getMessages(userData , trip): FirebaseListObservable<any> {
    console.log("getmens chat service "+trip.$key);
    return this.af.database.list(`/chats/trip.$key/${userData.auth.uid}/messages`);
  }

  sendMessage(text: string , userData , trip) {
    let newMessage = new Message(userData.auth.photoURL, userData.auth.displayName, text, new Date().getTime(),
    false, trip.$key);
    // if (userData) {
      console.log(newMessage);
      return Observable.of(this.af.database.list(`/chats/trip.$key/${userData.auth.uid}/messages`).push(newMessage));
    }

}
