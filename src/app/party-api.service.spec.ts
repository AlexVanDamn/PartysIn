import { TestBed } from '@angular/core/testing';

import { PartyApiService } from './party-api.service';

describe('PartyApiService', () => {
  let service: PartyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
