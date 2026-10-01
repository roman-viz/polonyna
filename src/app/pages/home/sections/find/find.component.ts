import { Component } from '@angular/core';
import { HeadingComponent } from '../../../../shared/components/heading/heading.component';
import { ParagraphComponent } from '../../../../shared/components/paragraph/paragraph.component';
import { SectionComponent } from '../../../../shared/components/section/section.component';
import { TrailMapComponent } from '../../../../shared/components/map/trail-map.component';

@Component({
  selector: 'app-find',
  standalone: true,
  imports: [
    HeadingComponent, 
    ParagraphComponent, 
    SectionComponent,
    TrailMapComponent
  ],
  templateUrl: './find.component.html',
  styleUrl: './find.component.scss'
})
export class FindComponent {

}
