import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

//Gọi service
import { AppService } from '../app.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private  service: AppService,
    private  messageService: MessageService
    ) { }

  @Input() parentstochilds: any;

  confirm_login: any;

  ngOnInit(): void {
    this.confirm_login = localStorage.getItem('token');
    
  }

  getInfoUser(){
    const token = localStorage.getItem('token');

    this.service
    .get_info_user(token)
    .subscribe((data) => {
      
      // this.data = data;
      localStorage.setItem('dataUser', data.toString()); 
      // const dataUser = localStorage.getItem('dataUser');
      this.messageService.sendUserInfo(data)
      console.log("get_info_user: ", data);
    });
    

  }

  logout(){
    var token = localStorage.getItem('token');
    // console.log(token);
    
    this.service
    .delete_token(token)
    .subscribe((result: any) => {
      if(result.kq==0){
        console.log('kq 0', result.kq);
        
      }else{
        console.log('kq 1', result.err);
      }
      
    });
    
    
    //Xóa localStorage
    this.confirm_login = localStorage.removeItem('token');

    
    //Chuyển về trang đăng nhập
    this.router.navigateByUrl('/dang-nhap');

    window.location.reload()
  }

}
