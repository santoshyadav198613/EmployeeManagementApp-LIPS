import { Component, OnInit } from '@angular/core';

import { CommentService } from '../service/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers : [CommentService]
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
