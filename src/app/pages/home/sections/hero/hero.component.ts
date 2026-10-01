import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { WindRoseIconComponent } from '../../../../shared/components/wind-rose-icon/wind-rose-icon.component';
import { Utils } from '../../../../shared/utils';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, WindRoseIconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @ViewChild('hero', { static: true }) heroContainer!: ElementRef;

  clouds1Position: string = '-105%'; // Starting position for clouds1
  clouds2Position: string = '105%'; // Starting position for clouds2
  iconRotateStyle = 'translate(-50%, -50%) rotate(0deg)';

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const section = this.heroContainer.nativeElement;
    const sectionRect = section.getBoundingClientRect();
    const sectionHeight = sectionRect.height;
    const sectionTop = sectionRect.top;
    const sectionBottom = sectionRect.bottom;
    const viewportHeight = window.innerHeight;
    const visibleTop = Math.max(0, sectionTop);
    const visibleBottom = Math.min(viewportHeight, sectionBottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const visibilityRatio = visibleHeight / sectionHeight;

    if (visibilityRatio > 0) {
      const movement = visibilityRatio * 100 + 5;
      this.clouds1Position = `${-movement - 5}%`; // First cloud moves from 100% to 0
      this.clouds2Position = `${-movement - 5}%`; // Second cloud moves from -100% to 0
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // TO ROTATE WIND ROSE ICON INTO MOUSE POSITION
    
    /* if (Utils.isMobileDevice()) {
      return;
    }

    const box = document.querySelector('.wind-rose-icon');
    if (box) {
      const boxBoundingRect = box.getBoundingClientRect();
      const boxCenter = {
        x: boxBoundingRect.left + boxBoundingRect.width / 2,
        y: boxBoundingRect.top + boxBoundingRect.height / 2
      };
      const angle = Math.atan2(event.pageX - boxCenter.x, - (event.pageY - boxCenter.y)) * (180 / Math.PI);
      this.iconRotateStyle = `translate(-50%, -50%) rotate(${angle}deg)`;
    } */
  }

}
