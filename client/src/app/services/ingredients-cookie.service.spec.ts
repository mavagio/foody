import { TestBed } from '@angular/core/testing';

import { IngridientsCookieService } from './ingredients-cookie.service';

describe('IngridientsCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngridientsCookieService = TestBed.get(IngridientsCookieService);
    expect(service).toBeTruthy();
  });
});
