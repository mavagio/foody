import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.css']
})
export class WeeksComponent implements OnInit {

  public recipeList:Object[] = [
    {
      short_description: "Mexican pulled pork ketogenic high energy taco's",
      image_url: "url(/assets/recipe1.jpg)"
    },
    {
      short_description: "Colombian abricote cottage cheese steak",
      image_url: "url(/assets/recipe2.jpg)"
    },
    {
      short_description: "Traditional chicken with onions monstrosity",
      image_url: "url(/assets/recipe3.jpg)"
    },
    {
      short_description: "Minimal calories for your food baby maker",
      image_url: "url(/assets/recipe4.jpg)"
    },
    {
      short_description: "Eastern promises, when vodka meets potato, magic happens",
      image_url: "url(/assets/recipe5.jpg)"
    },
    {
      short_description: "Indian amnsia, you will only remember what you ate in the monring",
      image_url: "url(/assets/recipe6.jpg)"
    },
    {
      short_description: "Hand made pizza, oven napoli is jealous how crisp the crust is.",
      image_url: "url(/assets/recipe7.jpg)"
    },
  ]
  constructor() { }
  
  ngOnInit() {
  }

}
