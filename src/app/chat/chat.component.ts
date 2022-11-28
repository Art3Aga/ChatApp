import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mensajes } from '../models/mensajes';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  id!: number;

  messagesSubscription!: Subscription;

  messages: Mensajes[] = [
    // { userId: '', message: 'Hola', time: '8:01 p.m', status: 'sent' },
    // { userId: '', message: 'Hola!!', time: '8:02 p.m', status: 'received' },
  ];

  message: string = '';

  constructor(private socket: SocketService) { }

  ngOnInit() {
    this.id = window.history.state.id ?? 1;
    this.getMessages()
  }

  updateScroll(){
    let element = document.getElementById("content-chat");

    if (element) {
      // element.scrollTo({top: element.scrollHeight});
      element.scrollTop = element.scrollHeight;
    }
  }

  sendMessage() {
    let time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const message: Mensajes = {
      message: this.message,
      time,
      status: 'received'
    }
    const msmUser = {
      message, usuario: JSON.parse(localStorage.getItem('user-online') || '{}')
    }
    // this.messages.push(message);
    this.message = '';
    this.updateScroll()
    this.socket.sendMessage(msmUser)
  }

  getMessages() {
    this.messagesSubscription = this.socket.getMessages().subscribe(messages => {
      (this.messages as any) = messages;
    });
  }

  back() {
    history.back();
  }

  ngOnDestroy(): void {
      this.messagesSubscription.unsubscribe();
  }

}
