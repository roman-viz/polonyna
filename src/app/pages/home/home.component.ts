import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from "./sections/hero/hero.component";
import { AboutComponent } from './sections/about/about.component';
import { FindComponent } from "./sections/find/find.component";
import { SeasonsComponent } from "./sections/seasons/seasons.component";
import { MapComponent } from "./sections/map/map.component";
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    FindComponent,
    SeasonsComponent,
    MapComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
