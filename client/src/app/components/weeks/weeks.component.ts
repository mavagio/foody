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
      image_url: "url(../../../assets/recipe1.jpg)"
    },
    {
      short_description: "Mexican pulled pork ketogenic high energy taco's",
      image_url: "url(../../../assets/recipe2.jpg)"
    },
    {
      short_description: "Mexican pulled pork ketogenic high energy taco's",
      image_url: "url(../../../assets/recipe3.jpg)"
    },
    {
      short_description: "Mexican pulled pork ketogenic high energy taco's",
      image_url: "url(../../../assets/recipe4.jpg)"
    },
    {
      short_description: "Mexican pulled pork ketogenic high energy taco's",
      image_url: "url(../../../assets/recipe5.jpg)"
    },
    {
      short_description: "Mexican pulled pork ketogenic high energy taco's",
      image_url: "url(../../../assets/recipe6.jpg)"
    },
    {
      short_description: "Mexican pulled pork ketogenic high energy taco's",
      image_url: "url(../../../assets/recipe7.jpg)"
    },
  ]
  constructor() { }
  
  ngOnInit() {
  }

}
