import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat/chat.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Message } from '../chat/message'
import { Trip } from '../trip/trip'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  // styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public userData: any;
  private messages: FirebaseListObservable<any>;
  param: string;
  @Input() trip: Trip;

  constructor( private chatService: ChatService, private af: AngularFire , private route: ActivatedRoute ) { 
      this.af.auth.subscribe((data: any)=> {
      if (data) {
        this.userData = data;
      } else {
        this.userData = null;
      }
    });
  }

  ngOnInit() {
		// this.param = this.route.params['id'];
    // console.log("param en chat oninit"+this.param);
    this.getMessages();
		};

  sendMessage(messageInput: HTMLInputElement) {
    if (messageInput.value !== '') {
      console.log(messageInput.value, this.userData, this.trip );
      this.chatService.sendMessage(messageInput.value, this.userData, this.trip)
      messageInput.value = '';
    }
  }

  getMessages() {
    this.chatService.getMessages(this.userData , this.trip).subscribe((messages: FirebaseListObservable<any>) => {
      this.messages = messages;
    });
  }

}
