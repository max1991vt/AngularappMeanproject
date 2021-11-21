import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InfouserComponent } from './infouser/infouser.component';
import { ChatComponent } from './chat/chat.component';

//Gọi Http
import { HttpClientModule } from '@angular/common/http';

//Goij ngx-pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Gọi ngx-socket-io
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3100', options: {} };

//Gọi form lấy dữ liệu và kiểm tra dữ liệu bên ngoài
import { FormsModule } from '@angular/forms';

//Gọi form lấy dữ liệu và kiểm tra dữ liệu bên trong files .ts
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    LoginComponent,
    PostComponent,
    RegisterComponent,
    ContactComponent,
    Page404Component,
    SidebarComponent,
    InfouserComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    //ngx-pagination
    NgxPaginationModule,
    //ngx-socket-io
    SocketIoModule.forRoot(config),
    //Formmodule
    FormsModule,
    // ReactiveFormsModule
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
