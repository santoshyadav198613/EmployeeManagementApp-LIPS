import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Comments } from './comments';
@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments');
  }

  addComments(comment: Comments) {
    return this.http.post('https://jsonplaceholder.typicode.com/comments', comment);
  }
}
