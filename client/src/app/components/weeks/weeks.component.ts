import { Component, OnInit } from '@angular/core';
import {ApiRequestsService} from '../../services/api-requests.service';
import {IIngredient, IRecipe} from "../../../../../shared/models/recipeModel";
import { Cookie } from 'ng2-cookies';


@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.css']
})
export class WeeksComponent implements OnInit {

  public recipes: IRecipe[] = [];

  public ingredients: IIngredient[];

  constructor(private apiRequestsService: ApiRequestsService) {
  }

  ngOnInit() {
    this.getAllRecipes();
    let saveCookie = { someObject: "some value", somemore: "morevalue" };
    Cookie.set('userSettings', JSON.stringify(saveCookie));
    let goodCookie = Cookie.get('userSettings');
    console.log(JSON.parse(goodCookie));
  }

  public getAllRecipes(): void {
    this.apiRequestsService.getAllRecipes().subscribe(response => {
      this.recipes = response;
      this.aggregateAllIngredients();
    });
  }

  aggregateAllIngredients() {
    this.ingredients = [];
    for(let recipe of this.recipes) {
      this.ingredients = [...this.ingredients, ...recipe.ingredients];
    }
  }
}
