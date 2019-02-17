import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { IIngredient } from '../../../../shared/models/recipeModel';

@Injectable({
  providedIn: 'root'
})
export class IngridientsCookieService {
  public cookieName: string;
  public currentCheckedIngreedients: string[];
  constructor() {
    this.cookieName = "checked-ingredients-cookie";
    this.updateCurrentCheckedIngredientsCookie();
  }

  public setIngredientsArrayCookie(ingredients: string[]) {
    Cookie.set(this.cookieName, JSON.stringify(ingredients));
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
