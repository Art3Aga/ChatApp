import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatApp';

  constructor (private socket: SocketService, private chatService: ChatService) {
    // this.socket.setupSocketConnection()
  }
}
