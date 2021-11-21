import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //2.Sử dụng: localStorage.getItem('key');
      var token = localStorage.getItem('token');

      //Trong trường hợp
      //1.Chưa login: khi nhấp vào route thì trả về trang chủ hoặc trang login
      //2.Đã login: cho vào route mong muốn

      //Khi token == null : chưa login
      
      if(token != null && token != undefined) {
        // token => true
        return true;
      }else{
        // 0 "" undefine null  => token => false
        this.router.navigate(['dang-nhap'], { queryParams: { returnUrl: state.url } })
        // localhost:4200/#/dang-nhap?returnUrl=%2tin-tuc
        return false
      }
      //true: cho vào router, false: không cho vào router
      

  }
  
}
