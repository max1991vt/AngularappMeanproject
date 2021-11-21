import { Injectable } from '@angular/core';

interface Idata{
  date_created: "2021-11-12T07:11:28.329Z"
  date_updated: "2021-11-12T07:11:28.329Z"
  name: "Illustrator 1"
  parents: "Illustrator"
  price: 0
  slug: "illustrator-1"
  status: true
  trash: false
  __v: 0
  _id: "618e187db7b0c656b8fb1ef5"
}


//Gọi Http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000/api/';

//Cài đặt header
  option = { headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") };

  get_data_sidebar() {
    return this.http.get( this.url + 'category/list' );
  }
  get_name_category(slug:any){
    // return this.http.get( this.url + 'category/slug/' +slug );
    return this.http.get( `${this.url}category/slug/${slug}` )
  }

  get_data_product(parents: string){
    return this.http.get( this.url + 'product/parent/' +parents );
  }
  get_data_product_one(name:any){
    return this.http.get( this.url + 'product/' + name ).toPromise() as Promise<appAPI.getProdRes>;
  }


 
  
  get_form_register(data: any){
    let body = new URLSearchParams();

    //Khai báo body
    body.set('name', data.name);
    body.set('username', data.username);
    body.set('password', data.password);
    body.set('phone', data.phone);
    body.set('email', data.email);

    return this.http.post( this.url + 'user/add', body.toString(), this.option );
  }

  get_form_login(data: any){
    let body = new URLSearchParams();

    //Khai báo body
    body.set('username', data.username);
    body.set('password', data.password);

    return this.http.post( this.url + 'login', body.toString(), this.option );
  }

  delete_token(token: any){
   token = localStorage.getItem('token');
    return this.http.post( this.url + 'login/deletetoken/' + token, this.option);
  }

  get_info_user(token: any){
    token = localStorage.getItem('token');
     return this.http.post( this.url + 'login/getinfouser/' + token, this.option);
   }
  
}

 export namespace appAPI {
   export interface getProdReq{
    name: string
   }
   
    export interface getProdRes {
      data: {
        data: Idata[],
        kq: number
      }
    }


    
  }
  // product.api.ts

// export class CommentApi {
//   constructor(private http: HttpClient) {}

//   getCommentGroupParent(conversationId: string) {
//     let payload: CommentAPI.getCmtGroupReq = {
//       conversation_id: conversationId,
//       paging: {
//         limit: 100,
//         offset: 0,
//       },
//     };
//     return this.http
//       .post('url', payload)
//       .toPromise() as Promise<CommentAPI.getCmtGroupRes>;
//   }


// }

// export namespace CommentAPI {
//   export interface ReactionCmtReq {
//     like: Boolean;
//     is_hidden: Boolean;
//     private_reply: string | null;
//     fb_comment_id: string;
//     fb_post_id: string;
//     fb_page_id: string;
//   }

//   export interface ReplyCmtRes {
//     data: {
//       created_at: Date;
//       created_by: string;
//       fb_comment_id: string;
//       message: string;
//       sender: Sender;
//       updated_at: Date;
//       __v: 0;
//       _id: string;
//     };
//     message: string;
//     status: 201;
//   }

//   export interface ReplyCmtReq {
//     message: string;
//     attachment_url: string | null;
//     fb_page_id: string;
//   }
//   export interface getCmtGroupRes {
//     data: {
//       comments: CommentGroup[];
//       post_acttachment: PostActtachment;
//       post_detail: PostDetail;
//     };
//     messages: string;
//     status: number;
//   }

//   export interface getCmtGroupReq {
//     conversation_id: string;
//     paging: {
//       limit: number;
//       offset: number;
//     };
//   }
// }

// export class MessageService {
//   private tagList$ = new Subject<any[]>();

//   constructor() {}

//   sendTagListToConvers(tagList: any[]){
//     this.tagList$.next(tagList)
//   }

//   getTagListFromConversBox(): Observable<any[]>{
//     return this.tagList$.asObservable()
//   }

  
// }

