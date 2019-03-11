import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import {ApiRequestsService} from '../../services/api-requests.service';
import { ActivatedRoute } from '@angular/router';
import {IRecipe} from '../../../../../shared/models/recipeModel';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import {IngridientsCookieService} from '../../services/ingredients-cookie.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public videoSrc: SafeResourceUrl;

  public recipe: IRecipe;

  public checkedIngredients: string[];


  constructor(private activatedRoute: ActivatedRoute, 
              private apiRequestsService: ApiRequestsService,
              public sanitizer:DomSanitizer,
              public ingridientsCookieService: IngridientsCookieService) { 
              }

  ngOnInit() {
    this.getRecipe();
  }

  public onIngredientsSelected(e, selectionArray: any): void {
    e.option.value['selected'] = !e.option.value['selected'];
    const ingredientsIds: string[] = selectionArray.map(result => result.value._id);
    this.ingridientsCookieService.setIngredientsArrayCookie(ingredientsIds);
  }

  assignCheckedIngredients(){
    if(this.checkedIngredients != null) {
      this.recipe.ingredients.map(ingredient => {
        ingredient.selected = this.checkedIngredients.includes(ingredient._id);
      });
    }
  }

  private getRecipe() {
    this.activatedRoute.params.subscribe( params =>{
      const recipeId = params['recipeId'];
      if(recipeId) {
        this.apiRequestsService.getAllRecipeById(recipeId).subscribe(response => {
          this.recipe = response;
          //TODO move to a better position
          this.checkedIngredients = this.ingridientsCookieService.getCheckedIngredientsArray();
          this.assignCheckedIngredients();
          if(this.recipe.youtubeId) {
            this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/'+this.recipe.youtubeId);
          } else {
            this.videoSrc = this.recipe.videoURL;
          }
        });
      }
    });
  }
}
