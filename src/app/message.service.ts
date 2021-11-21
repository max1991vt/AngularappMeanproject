import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private tagList$ = new Subject<any[]>();

  private userInfo$ = new Subject<any>();

  constructor() {}

  sendTagListToConvers(tagList: any[]){
    this.tagList$.next(tagList)
  }

  getTagListFromConversBox(): Observable<any[]>{
    return this.tagList$.asObservable()
  }

  sendUserInfo(userInfo: any){
    this.userInfo$.next(userInfo)
  }

  getUserInfo() :Observable<any>{
    return this.userInfo$.asObservable()
  }
  
}
