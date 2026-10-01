import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./shared/components/menu/menu.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MenuComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'roza-vitriv';
  isLoading = true;

  ngAfterViewInit(): void {
    const isFirstLoad = !!JSON.parse(localStorage.getItem('rozaVitrivIsFirstLoad') || 'true');
    const delay = isFirstLoad ? 2000 : 0;

    setTimeout(() => {
      this.isLoading = false;
      localStorage.setItem('rozaVitrivIsFirstLoad', JSON.stringify(false));
    }, delay);
  }
}
