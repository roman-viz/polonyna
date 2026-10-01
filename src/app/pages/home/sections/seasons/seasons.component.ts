import { Component } from '@angular/core';
import { SectionComponent } from '../../../../shared/components/section/section.component';
import { HeadingComponent } from '../../../../shared/components/heading/heading.component';
import { SeasonsSliderComponent } from "../../../../shared/components/seasons-slider/seasons-slider.component";

@Component({
  selector: 'app-seasons',
  standalone: true,
  imports: [
    HeadingComponent,
    SectionComponent,
    SeasonsSliderComponent
],
  templateUrl: './seasons.component.html',
  styleUrl: './seasons.component.scss'
})
export class SeasonsComponent {

}
