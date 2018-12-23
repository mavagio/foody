import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10,
    slidesPerView: 1,
  };

  private currentSlidesPerView: number = 1;
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
    const tempSlidesPerview = Math.floor(this.screenWidth / 270);
    if (this.currentSlidesPerView !== tempSlidesPerview) {
      this.config.slidesPerView = tempSlidesPerview;
      this.currentSlidesPerView = tempSlidesPerview;
    }
  }

  ngOnInit() {

  }
}
