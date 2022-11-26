import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-list-chats',
  templateUrl: './list-chats.component.html',
  styleUrls: ['./list-chats.component.scss']
})
export class ListChatsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private socket: SocketService) { }

  name!: string;

  ngOnInit(): void {
    this.name = window.history.state.name ?? '';
  }

  gotToChat(id: number) {
    this.router.navigate(['/chat'], { state: { id } });
  }

}
