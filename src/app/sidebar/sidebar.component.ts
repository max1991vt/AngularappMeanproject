import { Component, OnInit } from '@angular/core';

//Gọi service
import { AppService } from '../app.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private service: AppService,
    private messageService: MessageService
  ) {
    this.messageService.getTagListFromConversBox().subscribe((tags) => {
      console.log('message: ', tags);
    });
  }
  list: any;

  ngOnInit(): void {
    this.service.get_data_sidebar().subscribe((kq: any) => {
      this.list = kq['data'];
      // console.log(this.list);
    });
  }
}
