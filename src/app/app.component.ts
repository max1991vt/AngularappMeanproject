import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app-test1';
  parentstochilds = 'Cha truyenf toi con';

  childstoparents(data: any){
    // console.log(data);
    
  }
}
