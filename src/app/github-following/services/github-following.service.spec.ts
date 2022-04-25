import { TestBed } from '@angular/core/testing';

import { GithubFollowingService } from './github-following.service';

describe('GithubFollowingService', () => {
  let service: GithubFollowingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubFollowingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
