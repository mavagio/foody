import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

export interface Ingridient {
  value: string;
  viewValue: string;
  price?: number,
}

export interface PreperationStep {
  text: string;
  id?: string;
  ingridientsInvolved?: Ingridient[];
}


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public ingridientList: Ingridient[];
  public preperationSteps: PreperationStep[];


  constructor() { 
    this.preperationSteps = 
      [
        { text: 'In a large bowl, season the pork with salt and pepper. Toss untill well-coated.'},
        { text: 'Heat the vegetable oil in a Dutch oven over high heat for 5 minutes, until very hot.'},
        { text: 'Working in batches, sear the pork on each side for 1 minute, until a brown crust forms.'},
        { text: 'Add all of the pork to the pot with the chili powder, oregano, cumin, bay leaf, garlic and onion. Toss to combine. Add the lime juice, orange juice, and chicken broth. Cover, reduce the heat to medium-high, and cook until the meat is tender, 1 hour.'},
        { text: 'Remove the pork from the pot and shred using 2 forks. Let the carnitas cool for 10 minutes.'},
        { text: 'In a large bowl, combine the mixed greens, carnitas, carrots, corn, black beans, and avocado. Toss well. Add dessing if desired.'},
        { text: 'Divide between plates and serve.'},
      ];
    this.ingridientList = 
    [
      { value: 'avocado', viewValue: 'Avocado' },
      { value: 'peanuts', viewValue:  'Peanuts'},
      { value: 'zuchini', viewValue:  'Zuchini'},
      { value: 'salt', viewValue:  'Salt'},
      { value: 'sugar', viewValue:  'Sugar'},
      { value: 'zuchini', viewValue:  'Zuchini'},
      { value: 'salt', viewValue:  'Salt'},
      { value: 'sugar', viewValue:  'Sugar'},
    ];
  }

  getScreenSize(event?) {
  }

  setSlidesPerView() {

    
  }

  ngOnInit() {
  }

}
