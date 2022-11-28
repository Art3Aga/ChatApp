import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { io } from 'socket.io-client';
import { Socket } from 'ngx-socket-io';
import { Usuario } from './models/usuarios';
// import { Socket } from 'ngx-socketio2';




@Injectable({
  providedIn: 'root',
})
export class SocketService {

  usuario!: Usuario;

  constructor(private socket: Socket, private router: Router) {}

  login(nombre: string) {
    return new Promise( (resolve, reject) => {
      this.socket.emit('set-user', {nombre}, (resp: any) => {
        const user: Usuario = resp.usuario;
        this.usuario = user;
        localStorage.setItem('user-online', JSON.stringify(user));
        resolve(resp);
      });
    })
  }

  logout() {
    this.usuario = {};
    localStorage.removeItem('user-online');
    this.router.navigate(['/login']).then(()=>{
      location.reload();
    });
  }

  getUsersOnline() {
    return this.socket.fromEvent('new-user');
  }

  sendMessage(message: any) {
    this.socket.emit('new-message', message);
  }

  getMessages() {
    return this.socket.fromEvent('messages');
  }
}
