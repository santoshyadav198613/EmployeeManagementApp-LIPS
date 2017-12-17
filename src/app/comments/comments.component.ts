import { Component, OnInit } from '@angular/core';

import { CommentService } from '../service/comment/comment.service';
import { Comments } from '../service/comment/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentService]
})
export class CommentsComponent implements OnInit {
  comment: Comments = new Comments();
  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  save() {
    this.commentService.addComments(this.comment).subscribe(
      (result) => console.log(result),
      (err) => console.log(err)
    )
    this.comment = new Comments();
  }
}
