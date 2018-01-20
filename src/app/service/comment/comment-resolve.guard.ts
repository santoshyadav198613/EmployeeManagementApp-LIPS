import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Comments } from './comments';
import { CommentService } from './comment.service';

@Injectable()
export class CommentResolveGuard implements Resolve<Comments[]> {

  constructor(private commentService: CommentService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comments[]> {
    return this.commentService.getComments();
  }

}
