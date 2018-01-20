import { Component, OnInit, Host } from '@angular/core';

import { CommentService } from '../../service/comment/comment.service';

import { Comments } from '../../service/comment/comments';

import { HttpEventType } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  commentsList: Comments[];
  constructor(private commentService: CommentService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.commentService.getComments().subscribe(
    //   (data) => {
    //     this.commentsList = data
    //   },
    //   (err) => console.log(err)
    // )

    this.route.data.subscribe(
      (data) => this.commentsList = data['commentList']
    )


    this.commentService.getPhotos().subscribe(
      (event) => {
        switch (event.type) {
          case HttpEventType.DownloadProgress: {
            console.log(event.loaded);
            break;
          }
          case HttpEventType.Response: {
            console.log(event.body);
            break;
          }
        }
      }
    )
  }

}
