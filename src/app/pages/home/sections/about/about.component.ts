import { Component, OnInit } from '@angular/core';
import { HeadingComponent } from "../../../../shared/components/heading/heading.component";
import { SubHeadingComponent } from '../../../../shared/components/sub-heading/sub-heading.component';
import { ParagraphComponent } from '../../../../shared/components/paragraph/paragraph.component';
import { SectionComponent } from '../../../../shared/components/section/section.component';
import { SliderComponent } from '../../../../shared/components/slider/slider.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeadingComponent, 
    SubHeadingComponent, 
    ParagraphComponent, 
    SectionComponent,
    SliderComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  mountains = [
    'Говерла 2061м',
    'Гора Бребенескул 2036м',
    'Чорна гора 2028м',
    'Гора Петрос 2020м',
    'Гора Гутин Томнатик 2016м',
    'Піп Іван Мараморошський 1936м',
    'Гора Туркул 1933м',
    'Гора Брескул 1911м',
    'Гора Близниця 1881м',
    'Гора Терентин 1388м',
    'Гора Менчул 1380м',
    'Вершини Румунських Карпат'
  ];
  slides = [];

  ngOnInit(): void {
    this.slides = this.getMountainSlides();
  }

  getMountainSlides(): any {
    return this.mountains.map((description, index) => ({
      image: `/assets/images/mountains/${index + 1}.webp`,
      thumbImage: `/assets/images/mountains/${index + 1}.webp`,
      alt: description,
      title: description
    }));
  }
}
