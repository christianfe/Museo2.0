import { TestBed } from '@angular/core/testing';

import { MuseumIndexService } from './museumindex.service';

describe('MuseumIndexService', () => {
  let service: MuseumIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuseumIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
