import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CommentsComponent } from './comments.component';
import { CommentListComponent } from './comment-list/comment-list.component';

import { CommentService } from '../service/comment/comment.service';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(
      [
        { path: 'comments', component: CommentsComponent },
        { path: 'comments/:id', component: CommentsDetailsComponent }
      ]
    )
  ],
  declarations: [
    CommentsComponent,
    CommentListComponent,
    CommentsDetailsComponent,
  ],
  providers : [CommentService]
})
export class CommentsModule { }
