import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListChatsComponent } from './list-chats/list-chats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { SocketioModule } from 'ngx-socketio2';
import { environment } from 'src/environments/environment';
import { SocketService } from './socket.service';


const config: SocketIoConfig = {
	url: environment.socketUrl, // socket server url;
	options: {
		transports: ['websocket'],
    autoConnect: true
	}
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListChatsComponent,
    ChatComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // SocketIoModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
