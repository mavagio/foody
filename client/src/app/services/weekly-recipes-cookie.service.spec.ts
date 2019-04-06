import { TestBed } from '@angular/core/testing';

import { WeeklyRecipesCookieService } from './weekly-recipes-cookie.service';

describe('WeeklyRecipesCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeeklyRecipesCookieService = TestBed.get(WeeklyRecipesCookieService);
    expect(service).toBeTruthy();
  });
});
