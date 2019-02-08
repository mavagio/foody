import { Component, OnInit, ViewChild } from '@angular/core';
import {style, state, animate, transition, trigger, query, stagger, group} from '@angular/animations';
import {scaleUp, numberChangeAnimation, progressAnimation, activeStepCircle, brightDimSelection} from '../../animations/animations';

import {Router, ActivatedRoute, Params} from '@angular/router';

export interface Allergy {
  value: string;
  viewValue: string;
}

enum FoodType {
  Vegetarian,
  Everything
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

  public foodTypEnum = FoodType;
  public activePage: number;
  public numberOfPeople: number;
  public amountPerPerson: number;
  public typeOfAllergies: Allergy[];
  public foodType: FoodType;

  public isCounterChanged=false;

  public selectedAlergies: Array<string> = ['no-allergies'];
  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router) {
    this.activePage = 0;
    this.numberOfPeople = 1;
    this.amountPerPerson = 1;
    this.typeOfAllergies = [{ value: 'avocado', viewValue: 'Avocado' },
                            { value: 'peanuts', viewValue:  'Peanuts'},
                            { value: 'gluten_intolerance', viewValue:  'Gluten intolerance'},
                            { value: 'lactose_intolerance', viewValue:  'Lactose intolerance'},
                            { value: 'other', viewValue:  'Other'},]
    this.foodType = FoodType.Vegetarian;
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
