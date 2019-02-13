import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import {ApiRequestsService} from '../../services/api-requests.service';
import { ActivatedRoute } from '@angular/router';
import {IRecipe} from '../../../../../shared/models/recipeModel';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public videoSrc: SafeResourceUrl;

  public recipe: IRecipe;

  constructor(private activatedRoute: ActivatedRoute, 
              private apiRequestsService: ApiRequestsService,
              public sanitizer:DomSanitizer) { 
              }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      const recipeId = params['recipeId'];
      if(recipeId) {
        this.apiRequestsService.getAllRecipeById(recipeId).subscribe(response => {
          this.recipe = response;
          this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/'+this.recipe.youtubeId);
          console.log(this.recipe);
        });
      }
    });
  }
}
