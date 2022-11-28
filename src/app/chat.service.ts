import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  constructor(private socket: SocketService) {}

  sendMessage(mensaje: string) {
    const payload = {
      // de: this.socket.getUsuario().nombre,
      cuerpo: mensaje,
    };

    // this.socket.emit('mensaje', payload);
  }

  // getMessages() {
  //   return this.socket.listen('mensaje-nuevo');
  // }

  // getMessagesPrivate() {
  //   return this.socket.listen('mensaje-privado');
  // }

  // getUsuariosActivos() {
  //   return this.socket.listen('usuarios-activos');
  // }

  // emitirUsuariosActivos() {
  //   this.socket.emit('obtener-usuarios');
  // }
}
