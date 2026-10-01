import { Component, Input, Renderer2, ViewChild } from '@angular/core';
import { NgImageSliderComponent, NgImageSliderModule } from 'ng-image-slider';
import { Utils } from '../../utils';

interface Slide {
  image: string,
  thumbImage: string,
  alt: string,
  title: string
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgImageSliderModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() slideImage = 2;
  @Input() slides: Slide[] = [];
  @ViewChild('nav') slider?: NgImageSliderComponent;

  isMobileDevice = false;

  constructor(
    private renderer: Renderer2,
  ) {
    this.isMobileDevice = Utils.isMobileDevice();
    this.slideImage = this.isMobileDevice ? 2 : 3;
  }

  onImageClick() {
    const menuElement = this.getMenuElement();
    if (menuElement) {
      this.renderer.setStyle(menuElement, 'z-index', '-1');
    } else {
      console.warn('Element with class "section" not found.');
    }
  }

  onLightboxClose() {
    const menuElement = this.getMenuElement();
    if (menuElement) {
      this.renderer.setStyle(menuElement, 'z-index', '1000');
    } else {
      console.warn('Element with class "section" not found.');
    }
  }

  getMenuElement() {
    return document.querySelector('.menu') as HTMLElement;
  }

  nextSlide() {
    this.slider?.next();
  }

  prevSlide() {
    this.slider?.prev();
  }
}
