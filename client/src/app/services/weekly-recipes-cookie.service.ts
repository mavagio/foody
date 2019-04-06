import { Injectable } from '@angular/core';
import { WEEKLY_RECIPES_COOKIE_NAME } from '../../../../shared/consts/consts';
import { Cookie } from 'ng2-cookies';
import { IRecipe } from '../../../../shared/models/recipeModel';

@Injectable({
  providedIn: 'root'
})
export class WeeklyRecipesCookieService {
  public cookieName: string;
  public cookieExpirationDays: number;

  constructor() {
    this.cookieName = WEEKLY_RECIPES_COOKIE_NAME;
    this.cookieExpirationDays = 7;
  }

  public setWeeklyRecipesCookie(weeklyRecipes: IRecipe[]): void {
    Cookie.set(this.cookieName, JSON.stringify(weeklyRecipes), this.cookieExpirationDays);
  }

  public getWeeklyRecipesObjectFromCookies(): IRecipe[] {
    const stringifedCookie = Cookie.get(this.cookieName);
    console.log(stringifedCookie);
    if (stringifedCookie) {
      const weeklyRecipes: IRecipe[] = JSON.parse(stringifedCookie);
      return weeklyRecipes;
    }
    return null;
  }
}
