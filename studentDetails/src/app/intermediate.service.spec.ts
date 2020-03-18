import { TestBed } from '@angular/core/testing';

import { IntermediateService } from './intermediate.service';

describe('IntermediateService', () => {
  let service: IntermediateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntermediateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
