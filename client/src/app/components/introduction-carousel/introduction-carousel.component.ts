import { Component, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger, query, stagger, group} from '@angular/animations';
import {scaleUp, numberChangeAnimation, progressAnimation, activeStepCircle, brightDimSelection} from '../../animations/animations';

export interface Allergy {
  value: string;
  viewValue: string;
}

enum FoodType {
  Vegan,
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
  constructor() {
    this.activePage = 0;
    this.numberOfPeople = 1;
    this.amountPerPerson = 1;
    this.typeOfAllergies = [{ value: 'avocado', viewValue: 'Avocado' },
                            { value: 'peanuts', viewValue:  'Peanuts'},
                            { value: 'gluten_intolerance', viewValue:  'Gluten intolerance'},
                            { value: 'lactose_intolerance', viewValue:  'Lactose intolerance'},
                            { value: 'shit', viewValue:  'Shit'},]
    this.foodType = FoodType.Vegan;
  }

  ngOnInit() {
  }

  public nextPage(): void {
    this.activePage += 1;
  }

  public generateRecepies(): void {
    console.log(this.selectedAlergies);
  }
}
