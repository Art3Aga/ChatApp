import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from '../models/usuarios';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-list-chats',
  templateUrl: './list-chats.component.html',
  styleUrls: ['./list-chats.component.scss']
})
export class ListChatsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute, private socket: SocketService) { }

  name!: string;

  usersOnline: Usuario[] = [];

  usersSubscription!: Subscription;

  ngOnInit(): void {
    this.name = window.history.state.name ?? '';
    this.getUsersOnline();
  }

  gotToChat(id: number) {
    this.router.navigate(['/chat'], { state: { id } });
  }

  getUsersOnline() {
    this.usersSubscription = this.socket.getUsersOnline().subscribe(users => {
      (this.usersOnline as any) = users;
      console.log(users);

    })
  }

  logout() {
    this.socket.logout();
  }

  ngOnDestroy(): void {
      this.usersSubscription.unsubscribe();
  }

}
