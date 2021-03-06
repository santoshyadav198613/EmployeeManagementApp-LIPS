import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CommentsComponent } from './comments.component';
import { CommentListComponent } from './comment-list/comment-list.component';

import { CommentService, CommentResolveGuard } from '../service';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';

import { AuthGuard } from '../service/guards/auth.guard';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(
      [
        {
          path: '', component: CommentsComponent,
          canActivate: [AuthGuard],
          resolve: {
            commentList: CommentResolveGuard
          }
        },
        { path: ':id', component: CommentsDetailsComponent, canActivate: [AuthGuard] }
      ]
    )
  ],
  declarations: [
    CommentsComponent,
    CommentListComponent,
    CommentsDetailsComponent,
  ],
  providers: [CommentService, CommentResolveGuard]
})
export class CommentsModule { }
