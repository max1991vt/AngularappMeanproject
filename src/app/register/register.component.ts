import { Component, OnInit } from '@angular/core';

//Gọi service
import { AppService } from '../app.service';

//Gọi form lấy dữ liệu và kiểm tra dữ liệu bên trong files .ts
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // dataForm={ 
  //   name: 'admin', 
  //   username: 'admin', 
  //   password: '123456',
  //   email: 'admin@',
  //   phone: '123456123123'
  // }

  constructor(private service: AppService) { }

  ngOnInit(): void {
  }

  register(data:any){
    this.service
    .get_form_register(data)
    .subscribe((kq)=>{
      console.log(kq);
      
    })
    
  }

  //Kiểm tra dữ liệu sử dụng FormControl, FormGroup, Validators

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]), 
    phone: new FormControl('',[Validators.required, ]),
  });

  //Trả về từng giá trị từ registerForm để kiểm tra lỗi
  get name(){ return this.registerForm.controls.name; }
  get username(){ return this.registerForm.controls.username; }
  get password(){ return this.registerForm.controls.password; }
  get email(){ return this.registerForm.controls.email; }
  get phone(){ return this.registerForm.controls.phone; }

  getFormGroup(){
    console.log(this.registerForm.value);
    
  }

}
