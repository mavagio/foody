import { TestBed } from '@angular/core/testing';

import { UserSettingsCookieService } from './user-settings-cookie.service';

describe('SettingsCookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSettingsCookieService = TestBed.get(UserSettingsCookieService);
    expect(service).toBeTruthy();
  });
});
