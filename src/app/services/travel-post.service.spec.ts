import { TestBed, inject } from '@angular/core/testing';

import { TravelPostService } from './travel-post.service';

describe('TravelPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelPostService]
    });
  });

  it('should be created', inject([TravelPostService], (service: TravelPostService) => {
    expect(service).toBeTruthy();
  }));
});
