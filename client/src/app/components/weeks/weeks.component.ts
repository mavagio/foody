import { Component, OnInit } from '@angular/core';
import {ApiRequestsService} from '../../services/api-requests.service';
import {IIngredient, IRecipe} from '../../../../../shared/models/recipeModel';
import {IngridientsCookieService} from '../../services/ingredients-cookie.service';
import {WeeklyRecipesCookieService} from '../../services/weekly-recipes-cookie.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.css']
})
export class WeeksComponent implements OnInit {

  public recipes: IRecipe[] = [];

  public ingredients: IIngredient[];

  public checkedIngredients: string[];

  constructor(private apiRequestsService: ApiRequestsService,
              private ingridientsCookieService: IngridientsCookieService, 
              private weeklyRecipesCookieService: WeeklyRecipesCookieService,
              private router: Router,) {
  }

  ngOnInit() {
    this.getAllRecipes();
    this.checkedIngredients = this.ingridientsCookieService.getCheckedIngredientsArray();
  }

  public getAllRecipes(): void {
    const weeklyRecipesObjectFromCookies = this.weeklyRecipesCookieService.getWeeklyRecipesObjectFromCookies();
    console.log(weeklyRecipesObjectFromCookies);
    if(weeklyRecipesObjectFromCookies == null) {
      this.getRecipesFromApi();
    } else {
      this.recipes = weeklyRecipesObjectFromCookies;
    }
  }

  private getRecipesFromApi(): void {
    this.apiRequestsService.getWeeks().subscribe(response => {
      if(response == null) {
        this.router.navigate(['/']);
        return;
      }
      this.recipes = response;
      console.log(response);
      this.aggregateAllIngredients();
      this.assignCheckedIngredients();
      this.saveRecipesInCookies();
    });
  }

  private saveRecipesInCookies() {
    this.weeklyRecipesCookieService.setWeeklyRecipesCookie(this.recipes);
  }

  public onIngredientsSelected(e, selectionArray: any): void {
    e.option.value['selected'] = !e.option.value['selected'];
    const ingredientsNames: string[] = selectionArray.map(result => result.value._id);
    this.ingridientsCookieService.setIngredientsArrayCookie(ingredientsNames);
  }

  aggregateAllIngredients() {
    this.ingredients = [];
    for(let recipe of this.recipes) {
      this.ingredients = [...this.ingredients, ...recipe.ingredients];
    }
  }

  assignCheckedIngredients(){
    if(this.checkedIngredients != null) {
      this.ingredients.map(ingredient => {
        ingredient.selected = this.checkedIngredients.includes(ingredient._id);
      });
    }
  }
}
