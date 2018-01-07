import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Comments } from './comments';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments', { headers: new HttpHeaders().set('apiKey', 'gfdgdgsdf').set('password','password') });
  }

  addComments(comment: Comments) {
    return this.http.post('https://jsonplaceholder.typicode.com/comments', comment,{ headers: new HttpHeaders().set('apiKey', 'gfdgdgsdf').set('password','password') });
  }
}
