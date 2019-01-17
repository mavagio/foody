import { Component, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';

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
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('slideInLeft', [
        state('in', style({opacity: 1, transform: 'translate3d(0, 0, 0)'})),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)'
          }),
          animate('400ms 200ms ease-in')
        ])
      ]
    ),
    trigger('scaleUp', [
      state('in', style({opacity: 1, transform: 'translate3d(0, 0, 0)'})),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'scale(0.5)',
          }),
          animate('200ms ease-in')
        ])
      ]
    ),
    trigger('shrinkOut', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ])
    ]),
  ],
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
