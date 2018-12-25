import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public config: SwiperOptions = {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    bulletClass: 'dot',
    bulletActiveClass: 'dot-active',
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
    this.config.slidesPerView = this.screenWidth / 130;
  }

  ngOnInit() {
  }

}
