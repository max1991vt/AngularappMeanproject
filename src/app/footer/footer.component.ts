import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Output() childstoparents: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.childstoparents.emit('con gui qua cha');
  }

}
