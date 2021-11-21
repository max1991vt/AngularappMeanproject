import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Gọi service
import { AppService } from '../app.service';
//Gọi form lấy dữ liệu và kiểm tra dữ liệu bên trong files .ts
import { FormControl, FormGroup, Validators }from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private  service: AppService) { }
  usetoken :any;
  token :any;

  ngOnInit(): void {
    //localstorage

    //1.Tạo: localStorage.setItem('key', 'value');
    // localStorage.setItem('token', token : any);
    
    //Chuyển về trang chủ
    // window.location.href = '/';
    // this.router.navigateByUrl('/thong-tin-thanh-vien');
    // this.service
    // .get_token(this.token)
    // .subscribe((results: any) => {
    //   // this.usetoken =  results['token'];
    //   console.log(results);
      
    // })
    
    //2.Sử dụng: localStorage.getItem('key');
    //3.Xóa: localStorage.removeItem('key');
  }

  login(data: any) { 
    this.service
    .get_form_login(data)
    .subscribe((result: any) => {
      if(result.kq==0){
        alert(result.err);
        window.location.href = '/dang-nhap';
        console.log("Token 0", result);
      }else{
        // kq = 1
        // login successfully
        // alert('Hello  ' + result.data.username + '!' );
        //token
        console.log("Token 1", result);
        
        this.token = result.data.token;
        //1.Tạo: localStorage.setItem('key', 'value');
        localStorage.setItem('token', this.token); 
        window.location.href = '/';

        // this.service
        // .get_token()
        // .subscribe((results: any) => {
        // this.usetoken =  results['token'];
        // console.log(results);
        // this.router.navigate(['home'], { queryParams: { returnUrl: state.url } })
    // })
      }
      
    })
    
  }

  //Kiểm tra dữ liệu sử dụng FormControl, FormGroup, Validators

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  // //Trả về từng giá trị từ registerForm để kiểm tra lỗi
  get username(){ return this.loginForm.controls.username; }
  get password(){ return this.loginForm.controls.password; }

  getFormGroup(){
    console.log(this.loginForm.value);
  }

  

}
