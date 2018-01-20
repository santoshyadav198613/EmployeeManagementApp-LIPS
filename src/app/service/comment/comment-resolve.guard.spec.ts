import { TestBed, async, inject } from '@angular/core/testing';

import { CommentResolveGuard } from './comment-resolve.guard';

describe('CommentResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentResolveGuard]
    });
  });

  it('should ...', inject([CommentResolveGuard], (guard: CommentResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
