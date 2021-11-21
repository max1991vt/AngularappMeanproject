import { Component, OnInit } from '@angular/core';

//Gọi service
import { AppService } from '../app.service';


import { MessageService } from '../message.service';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.css']
})
export class InfouserComponent implements OnInit {

  userInfo: any;
  
  constructor( private  service: AppService, private  messageService: MessageService ) { 
    this.messageService.getUserInfo().subscribe(userInfo => {
      console.log("userInfo info component: ", userInfo);
      this.userInfo = userInfo;
    })
  }

  ngOnInit(): void {
    const dataUser = localStorage.getItem('dataUser');
    console.log("dataUser: ", dataUser);
    
  }

  

}
