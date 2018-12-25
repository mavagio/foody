import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public configIngridients: SwiperOptions = {
    paginationClickable: true,
    freeMode: true,
    spaceBetween: 20,
  };

  public configPreparetion: SwiperOptions = {
    paginationClickable: true,
    freeMode: true,
    spaceBetween: 20,
  };
  private screenWidth: any;

  constructor() { 
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    this.setSlidesPerView();
  }

  setSlidesPerView() {
    this.configIngridients.slidesPerView = this.screenWidth / 130;
    this.configPreparetion.slidesPerView = this.screenWidth / 230;
  }

  ngOnInit() {
  }

}
