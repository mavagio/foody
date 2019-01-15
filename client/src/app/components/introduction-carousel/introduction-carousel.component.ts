import { Component, OnInit } from '@angular/core';

export interface Allergy {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-introduction-carousel',
  templateUrl: './introduction-carousel.component.html',
  styleUrls: ['./introduction-carousel.component.css']
})
export class IntroductionCarouselComponent implements OnInit {

  public activePage: number = 1;
  public numberOfPeople: number = 1;
  public amountPerPerson: number = 1;
  typesOfShoes: string[] = ['Avocado', 'Penuts', 'Balls', 'Pystachio', 'Other'];

  public allergiesArray: Allergy[] = [
    {value: 'peanuts', viewValue: 'Peanuts'},
    {value: 'lactose-intolerance', viewValue: 'Lactose intolerance'},
    {value: 'gluten-intolerance', viewValue: 'Gluten intolerance'}
  ];
  public selectedAlergies: Array<string> = ['no-allergies'];
  constructor() { }

  ngOnInit() {
  }

  public nextPage(): void {
    this.activePage += 1;
  }

  public generateRecepies(): void {
    console.log(this.selectedAlergies);
  }
}
