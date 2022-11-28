import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  name!: string;
  showAvatarPool: boolean = false;
  avatars: any[] = [
    { img: '../../assets/avatar1.png', selected: false },
    { img: '../../assets/avatar2.png', selected: false },
    { img: '../../assets/avatar3.png', selected: false },
    { img: '../../assets/avatar4.png', selected: false },
    { img: '../../assets/avatar5.png', selected: false },
    { img: '../../assets/avatar6.png', selected: false },
    { img: '../../assets/avatar7.png', selected: false },
    { img: '../../assets/avatar8.png', selected: false },
    { img: '../../assets/avatar9.png', selected: false },
  ];

  avatarSelected: any;

  constructor(private router: Router, private socket: SocketService) {}

  ngOnInit(): void {
    this.avatars[0].selected = true;
    this.avatarSelected = this.avatars[0];
  }

  selectAvatar(index: number) {
    if (this.avatars[index].selected) {
      this.avatars[index].selected = false;
    }
    else {
      this.avatars.forEach(item => {
        const newItem = item;
        newItem.selected = false;
        return newItem;
      });
      this.avatars[index].selected = true;
      this.avatarSelected = this.avatars[index];
    }
  }

  navigate(currentRoute: string) {
    this.name = this.capitalizeName(this.name)
    if (currentRoute == 'login') {
      this.showAvatarPool = true;
    } else {
      this.socket.login(this.name).then(v => {
        this.showAvatarPool = false;
        this.router.navigate(['/chats'], { state: { name: this.name } });
      });
    }
  }

  capitalizeName(name: string) {
    let arr = name.split(' ');
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
  }
}
