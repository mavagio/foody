import { Component, OnInit, ViewChild } from '@angular/core';
import {style, state, animate, transition, trigger, query, stagger, group} from '@angular/animations';
import {scaleUp, numberChangeAnimation, progressAnimation, activeStepCircle, brightDimSelection} from '../../animations/animations';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NutritionCategory } from '../../../../../shared/models/recipeModel';
import { IUserSettings } from '../../../../../shared/models/userSettingsModel';

import { UserSettingsCookieService } from '../../services/user-settings-cookie.service';

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
  public budgetPerDay: number;
  public typeOfAllergies: Allergy[];
  public nutritionCategory: NutritionCategory;

  public userSettingsObject: IUserSettings;
  public isCounterChanged=false;

  public selectedAlergies: Array<string> = ['no-allergies'];
  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private userSettingsCookieService: UserSettingsCookieService) {
    this.activePage = 0;
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
  }

  ngOnInit() {
    this.setActivePageFromParams();
    this.userSettingsObject = this.userSettingsCookieService.getUserSettingsObject();
    this.numberOfPeople = this.userSettingsObject.numberOfPeople != null ? this.userSettingsObject.numberOfPeople : 1;
    this.nutritionCategory = this.userSettingsObject.nutritionCategory != null? this.userSettingsObject.nutritionCategory: NutritionCategory.vegetarian;
    this.budgetPerDay = this.userSettingsObject.budgetPerDay != null ? this.userSettingsObject.budgetPerDay : 1;
  }

  private setActivePageFromParams() {
    this.activatedRoute.params.subscribe( params =>{
      const step = params['step'];
      if(step) {
        this.activePage = +step;
      }
    });
  }

  public onAllergiesSelection(selectionArray: any): void {
    const allergenicsNames: [string] = selectionArray.map(result => result.value.value)
    this.userSettingsCookieService.setAllergenicsCookie(allergenicsNames);
  }

  public onNumberOfPeopleSelection() {
    this.userSettingsCookieService.setNumberOfPeople(this.numberOfPeople);
  }

  public onBudgetPerDaySelection() {
    this.userSettingsCookieService.setBudgetPerDayCookie(this.budgetPerDay);
  }

  public onNutritionCategorySelection() {
    this.userSettingsCookieService.setNutritionCategoryCookie(this.nutritionCategory);
  }

  public incrementIntroductionPage(): void {
    this.router.navigate(['start', this.activePage + 1]);
  }

  public generateRecepies(): void {
  }

  private setUserSettingsCookie() {
    console.log();

    // this.userSettingsCookieService.setCookie(this.numberOfPeople, this.budgetPerDay, );
  }
}
