import { TestBed } from '@angular/core/testing';

import { OperasService } from './operas.service';

describe('OperasService', () => {
  let service: OperasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
