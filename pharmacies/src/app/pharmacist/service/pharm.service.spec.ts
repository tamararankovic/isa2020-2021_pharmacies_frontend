import { TestBed } from '@angular/core/testing';

import { PharmService } from './pharm.service';

describe('PharmService', () => {
  let service: PharmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
