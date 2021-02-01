import { TestBed } from '@angular/core/testing';

import { DermService } from './derm.service';

describe('DermService', () => {
  let service: DermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DermService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
