import { TestBed, inject } from '@angular/core/testing';

import { PosteService } from './poste.service';

describe('PosteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosteService]
    });
  });

  it('should be created', inject([PosteService], (service: PosteService) => {
    expect(service).toBeTruthy();
  }));
});
