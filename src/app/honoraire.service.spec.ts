import { TestBed } from '@angular/core/testing';

import { HonoraireService } from './honoraire.service';

describe('HonoraireService', () => {
  let service: HonoraireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HonoraireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
