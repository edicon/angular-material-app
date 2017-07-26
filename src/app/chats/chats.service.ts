import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { Chat } from './chats.model';

@Injectable()
export class ChatsService {
  public apiUrl = environment.chatsApi;
  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  addChat(chat) {
    const url = this.apiUrl;

    return this.http
      .post(url, JSON.stringify(chat), {headers: this.header})
      .map(res => res.json() as Chat[]);
  }

  getChats(): Observable<any> {
    const url = this.apiUrl;
    return this.http.get(url).map(res => res.json() as Chat[]);
  }

}
