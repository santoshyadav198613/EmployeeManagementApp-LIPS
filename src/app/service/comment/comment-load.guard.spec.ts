import { TestBed, async, inject } from '@angular/core/testing';

import { CommentLoadGuard } from './comment-load.guard';

describe('CommentLoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentLoadGuard]
    });
  });

  it('should ...', inject([CommentLoadGuard], (guard: CommentLoadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
