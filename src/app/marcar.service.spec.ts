import { TestBed } from '@angular/core/testing';

import { MarcarService } from './marcar.service';

describe('MarcarService', () => {
  let service: MarcarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
