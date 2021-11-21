import { Component, OnInit } from '@angular/core';

//Gọi socket
import { Socket } from 'ngx-socket-io';  

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    //gồm 2 cái: nhận và gửi
    this.socket.emit('angular', 'hello im angular');

    //Nhận từ server
    this.socket
    .fromEvent('server')
    .subscribe((data:any) => {
      console.log(data);
      
    })
  }

}
