import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionCaruselComponent } from './introduction-carousel.component';

describe('IntroductionCaruselComponent', () => {
  let component: IntroductionCaruselComponent;
  let fixture: ComponentFixture<IntroductionCaruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionCaruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
