import { TestBed } from '@angular/core/testing';

import { SolicitationsService } from './solicitations.service';

describe('SolicitationsService', () => {
  let service: SolicitationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
