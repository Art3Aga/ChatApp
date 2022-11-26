import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  id!: number;

  messages: any[] = [
    { message: 'Hola', time: '8:01 p.m', status: 'sent' },
    { message: 'Hola!!', time: '8:02 p.m', status: 'received' },
  ];

  message: string = '';

  constructor() { }

  ngOnInit() {
    this.id = window.history.state.id ?? 1;
  }

  updateScroll(){
    let element = document.getElementById("content-chat");

    if (element) {
      element.scrollTo({top: element.scrollHeight});
    }
  }

  send() {
    this.messages.push({ message: this.message, time: '8:03 p.m', status: 'sent' });
    this.message = '';
    this.updateScroll()
  }

  back() {
    history.back();
  }

}
