import { TestBed } from '@angular/core/testing';

import { LibTestTinSpaService } from './lib-test-tin-spa.service';

describe('LibTestTinSpaService', () => {
  let service: LibTestTinSpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibTestTinSpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
