import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./introduction-carousel.component.css']
})
export class IntroductionCarouselComponent implements OnInit {

  public foodTypEnum = FoodType;
  public activePage: number;
  public numberOfPeople: number;
  public amountPerPerson: number;
  public typeOfAllergies: Allergy[];
  public foodType: FoodType;

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
