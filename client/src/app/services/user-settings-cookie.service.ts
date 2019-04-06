import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { IUserSettings } from '../../../../shared/models/userSettingsModel';
import { NutritionCategory } from '../../../../shared/models/recipeModel';
import { USER_SETTINGS_COOKIE_NAME } from '../../../../shared/consts/consts';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsCookieService {
  public cookieName: string;
  public currentUserSettingsCookieValue: IUserSettings;
  public cookieExpirationDays: number;

  constructor() {
    this.cookieName = USER_SETTINGS_COOKIE_NAME;
    this.cookieExpirationDays = 300;
    this.updateCurrentUserSettingsCookieValue();
    if(this.currentUserSettingsCookieValue == null) {
      this.setUserSettingsCookie(null,null,null,null);
    }
  }

  private updateCurrentUserSettingsCookieValue() {
    this.currentUserSettingsCookieValue = this.getUserSettingsObject();
  }

  public setNumberOfPeople(numberOfPeople: number): void {
    this.updateUsereSettingsCookie(numberOfPeople, null, null, null);
  }

  public setBudgetPerDayCookie(budgetPerDay: number): void {
    this.updateUsereSettingsCookie(null, budgetPerDay, null, null);
  }

  public setAllergenicsCookie(allergenics: string[]): void {
    this.updateUsereSettingsCookie(null, null, allergenics, null);
  }

  public setNutritionCategoryCookie(nutritionCategory: NutritionCategory): void {
    this.updateUsereSettingsCookie(null, null, null, nutritionCategory);
  }

  public updateUsereSettingsCookie(numberOfPeople: number, budgetPerDay: number, allergenics: string[], nutritionCategory: NutritionCategory) {   
    this.setUserSettingsCookie(
      numberOfPeople != null ? numberOfPeople : this.currentUserSettingsCookieValue.numberOfPeople,
      budgetPerDay != null ? budgetPerDay : this.currentUserSettingsCookieValue.budgetPerDay,
      allergenics != null ? allergenics : this.currentUserSettingsCookieValue.allergenics,
      nutritionCategory != null ? nutritionCategory : this.currentUserSettingsCookieValue.nutritionCategory);
  }

  public setUserSettingsCookie(numberOfPeople: number, budgetPerDay: number, allergenics: string[], nutritionCategory: NutritionCategory) {
    const clearAllergenicsList = allergenics.filter(Boolean);
    const userSettings: IUserSettings =
    {
      numberOfPeople: numberOfPeople,
      budgetPerDay: budgetPerDay,
      allergenics: clearAllergenicsList,
      nutritionCategory: nutritionCategory,
    };
    Cookie.set(this.cookieName, JSON.stringify(userSettings), this.cookieExpirationDays);
    this.updateCurrentUserSettingsCookieValue();
  }

  public getUserSettingsObject(): IUserSettings {
    const stringifedCookie = Cookie.get(this.cookieName);
    if (stringifedCookie) {
      const userSettings: IUserSettings = JSON.parse(stringifedCookie);
      return userSettings;
    }
    return null;
  }
}
