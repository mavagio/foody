import { Component, OnInit, ViewChild } from '@angular/core';
import {style, state, animate, transition, trigger, query, stagger, group} from '@angular/animations';
import {scaleUp, numberChangeAnimation, progressAnimation, activeStepCircle, brightDimSelection} from '../../animations/animations';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NutritionCategory } from '../../../../../shared/models/recipeModel';
import { IUserSettings } from '../../../../../shared/models/userSettingsModel';

import { UserSettingsCookieService } from '../../services/user-settings-cookie.service';

export interface Allergenic {
  value: string;
  viewValue: string;
  selected: boolean;
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
  public typeOfAllergenics: Allergenic[];
  public nutritionCategory: NutritionCategory;

  public userSettingsObject: IUserSettings;
  public isCounterChanged=false;

  public selectedAlergies: Array<string> = ['no-allergies'];
  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private userSettingsCookieService: UserSettingsCookieService) {
    this.activePage = 0;
    this.typeOfAllergenics = [{ value: 'gluten', viewValue: 'Gluten', selected: false },
                            { value: 'crustaceans', viewValue:  'Crustaceans', selected: false},
                            { value: 'eggs', viewValue:  'Eggs', selected: false},
                            { value: 'peanuts', viewValue:  'peanuts', selected: false},
                            { value: 'soybeans', viewValue:  'Soybeans', selected: false},
                            { value: 'dairy', viewValue:  'Dairy', selected: false},
                            { value: 'tree_nuts', viewValue:  'Tree nuts', selected: false},
                            { value: 'celery', viewValue:  'Celery', selected: false},
                            { value: 'mustard', viewValue:  'Mustard', selected: false},
                            { value: 'sesame_seeds ', viewValue:  'Sesame seeds', selected: false},
                            { value: 'molluscs ', viewValue:  'Molluscs', selected: false},]
  }
  ngOnInit() {
    this.setActivePageFromParams();
    this.userSettingsObject = this.userSettingsCookieService.getUserSettingsObject();
    this.updateUserSettingsViewValues();
  }

  updateUserSettingsViewValues() {
    this.numberOfPeople = this.userSettingsObject.numberOfPeople != null ? this.userSettingsObject.numberOfPeople : 1;
    this.nutritionCategory = this.userSettingsObject.nutritionCategory != null? this.userSettingsObject.nutritionCategory: NutritionCategory.vegetarian;
    this.budgetPerDay = this.userSettingsObject.budgetPerDay != null ? this.userSettingsObject.budgetPerDay : 5;
    if(this.userSettingsObject.allergenics != null) this.typeOfAllergenics.map(allergenic => {allergenic.selected = this.userSettingsObject.allergenics.includes(allergenic.value)});
    console.log(this.typeOfAllergenics);
  }

  private setActivePageFromParams() {
    this.activatedRoute.params.subscribe( params =>{
      const step = params['step'];
      if(step) {
        this.activePage = +step;
      }
    });
  }

  public onAllergiesSelection(e, selectionArray: any): void {
    e.option.value.selected = !e.option.value.selected;
    const allergenicsNames: string[] = selectionArray.map(result => result.value.value)
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
    this.setUserSettingsCookie();
  }

  private setUserSettingsCookie() {
    const selectedAllergenicsValues = this.typeOfAllergenics.map( allergenic => {
      if(allergenic.selected) 
        return allergenic.value; 
      });
    this.userSettingsCookieService.setUserSettingsCookie(this.numberOfPeople, this.budgetPerDay, selectedAllergenicsValues, this.nutritionCategory)
    console.log(this.userSettingsCookieService.getUserSettingsObject());
  }
}
