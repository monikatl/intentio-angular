import { TestBed } from '@angular/core/testing';

import { IntentionServiceService } from './intention-service.service';

describe('IntentionServiceService', () => {
  let service: IntentionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntentionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
