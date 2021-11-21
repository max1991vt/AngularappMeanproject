import { Component, OnInit } from '@angular/core';
//Gọi param
import { ActivatedRoute, ParamMap } from '@angular/router';
//Gọi service
import { AppService } from '../app.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: AppService) { }
  name:any;
  list:any;
  parents:any;
  products:any;

  //trang hiện tại
  p: number = 1;

  //limit
  limit: number = 8;

  //Tổng số dữ liệu
  totalData: any;

  collection: any; 

  ngOnInit(): void {
    this.router
    .paramMap
    .subscribe((params: ParamMap) => {
      //slug
      this.name = params.get('id');

      this.service
      .get_name_category(this.name)
      .subscribe((kq:any) => {
        //Lấy name category

        this.parents = kq['data'];
        // console.log(this.parents);
        
        this.service
        .get_data_product(this.parents)
        .subscribe((kq:any) => {
          this.products = kq['data'];
          this.totalData = this.products.lenght;
          
        })
        
        
      })
    })


  //   this.service
  //   .get_data_sidebar()
  //   .subscribe((data) => {
  //     console.log(data);
  //   })
  }

}
