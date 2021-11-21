import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { PostComponent } from './post/post.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

//Gọi guard
import { AuthGuard } from './auth.guard';
import { InfouserComponent } from './infouser/infouser.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'san-pham/:id',
    component: ProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'danh-muc-bai-viet/:id',
    component: CategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tin-tuc',
    canActivate: [AuthGuard],
    component: PostComponent,
  },
  {
    path: 'lien-he',
    component: ContactComponent,
  },
  {
    path: 'dang-nhap',
    component: LoginComponent,
  },
  {
    path: 'dang-ky',
    component: RegisterComponent,
  },
  {
    path: 'thong-tin-thanh-vien',
    component: InfouserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: Page404Component,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// lazy loading modules - router angular

// {
//   path: 'select-shop',
//   loadChildren: () =>
//     import('src/app/pages/select-shop/select-shop.module').then(m => m.SelectShopModule),
// },
// {
//   path: 'landing-page',
//   // canActivate: [AuthGuard],
//   loadChildren: () =>
//     import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
// },