import { Component, OnInit } from '@angular/core';
//Gọi param
import { ActivatedRoute, ParamMap } from '@angular/router';
//Gọi service
import { AppService } from '../app.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  name: any;
  data: any;
  
  constructor(
    private router: ActivatedRoute,
    private service: AppService,
    private messageService: MessageService
  ) {}
 
  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      // this.name = params.get('id');
      //   this.service
      //   .get_data_product_one(this.name)
      //   .subscribe((data) => {
      //     console.log({data});
      //     console.log("this.data: ", this.data?.data[0]?.name);
      //     this.data = data // {...data}
      //     // this.nameProduct = data[0].name;
      //   })

      // Rxjs - Ngrx store

      this.name = params.get('id');
      this.service
        .get_data_product_one(this.name)
        .then((data) => {
          console.log('this.data: ', this.data?.data[0]?.name);
          this.data = data; // {...data}
        })
        .catch((error) => {
          console.error('error: ', error); // red
          // console.warn() // yellow
          // console.table();
        });

      // })
    });
  }

  onClickProduct(){
    this.messageService.sendTagListToConvers(["a", "1", 3])
  }
  
}
