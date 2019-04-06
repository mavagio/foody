import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { IIngredient } from '../../../../shared/models/recipeModel';
import { CHECKED_INGREDIENTS_COOKIE_NAME } from '../../../../shared/consts/consts';

@Injectable({
  providedIn: 'root'
})
export class IngridientsCookieService {
  public cookieName: string;
  public currentCheckedIngreedients: string[];
  private cookieExpirationDays: number;
  constructor() {
    this.cookieName = CHECKED_INGREDIENTS_COOKIE_NAME;
    this.updateCurrentCheckedIngredientsCookie();
    this.cookieExpirationDays = 7;
  }

  public setIngredientsArrayCookie(ingredients: string[]) {
    Cookie.set(this.cookieName, JSON.stringify(ingredients), this.cookieExpirationDays);
    this.updateCurrentCheckedIngredientsCookie();
  }

  private updateCurrentCheckedIngredientsCookie() {
    this.currentCheckedIngreedients = this.getCheckedIngredientsArray();
  }

  public getCheckedIngredientsArray(): string[] {
    const stringifedCookie = Cookie.get(this.cookieName);
    if (stringifedCookie) {
      const userSettings: string[] = JSON.parse(stringifedCookie);
      return userSettings;
    }
    return null;
  }
}
