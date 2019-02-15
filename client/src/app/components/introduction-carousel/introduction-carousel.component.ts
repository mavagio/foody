import { Component, OnInit, ViewChild } from '@angular/core';
import {style, state, animate, transition, trigger, query, stagger, group} from '@angular/animations';
import {scaleUp, numberChangeAnimation, progressAnimation, activeStepCircle, brightDimSelection} from '../../animations/animations';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { NutritionCategory } from '../../../../../shared/models/recipeModel'
export interface Allergy {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-introduction-carousel',
  templateUrl: './introduction-carousel.component.html',
  styleUrls: ['./introduction-carousel.component.css'],
  animations: [
    scaleUp,
    numberChangeAnimation,
    progressAnimation,
    activeStepCircle,
    brightDimSelection
  ],
})
export class IntroductionCarouselComponent implements OnInit {

  public nutritionCategoryEnum = NutritionCategory;
  public activePage: number;
  public numberOfPeople: number;
  public amountPerPerson: number;
  public typeOfAllergies: Allergy[];
  public nutritionCategory: NutritionCategory;

  public isCounterChanged=false;

  public selectedAlergies: Array<string> = ['no-allergies'];
  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router) {
    this.activePage = 0;
    this.numberOfPeople = 1;
    this.amountPerPerson = 1;
    this.typeOfAllergies = [{ value: 'gluten', viewValue: 'Gluten' },
                            { value: 'crustaceans', viewValue:  'Crustaceans'},
                            { value: 'eggs', viewValue:  'Eggs'},
                            { value: 'peanuts', viewValue:  'peanuts'},
                            { value: 'soybeans', viewValue:  'Soybeans'},
                            { value: 'dairy', viewValue:  'Dairy'},
                            { value: 'tree_nuts', viewValue:  'Tree nuts'},
                            { value: 'celery', viewValue:  'Celery'},
                            { value: 'mustard', viewValue:  'Mustard'},
                            { value: 'sesame_seeds ', viewValue:  'Sesame seeds'},
                            { value: 'molluscs ', viewValue:  'Molluscs'},]
    this.nutritionCategory = NutritionCategory.vegetarian;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      const step = params['step'];
      if(step) {
        this.activePage = +step;
      }
    });
  }

  public incrementIntroductionPage(): void {
    this.router.navigate(['start', this.activePage + 1]);
  }

  public generateRecepies(): void {
  }
}
