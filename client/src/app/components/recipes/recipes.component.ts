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
    spaceBetween: 20,
    slidesPerView: 1.25,
    bulletClass: 'dot',
    bulletActiveClass: 'dot-active',
    centeredSlides: true,
  };

  private numberOfSliders: number = 5;

  private currentSlidesPerView: number = 1;
  private screenWidth: any;
  constructor() {
    this.config.initialSlide = Math.floor(this.numberOfSliders/2);
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    this.setSlidesPerView();
  }

  setSlidesPerView() {
    const tempSlidesPerview = this.screenWidth / 240;
    if (this.currentSlidesPerView !== tempSlidesPerview) {
      this.config.slidesPerView = tempSlidesPerview;
      this.currentSlidesPerView = tempSlidesPerview;
    }
  }

  ngOnInit() {

  }
}
