import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';

interface menuLink {
  address: string,
  displayName: string,
  visible: boolean,
  isSection: boolean,
  preventVisibility?: boolean,
}

@UntilDestroy()
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  links: menuLink[] = [
    {
      address: '',
      displayName: 'Головна',
      visible: true,
      isSection: false,
    },
    {
      address: 'hero',
      displayName: '',
      visible: false,
      isSection: true,
      preventVisibility: true,
    },
    {
      address: 'about',
      displayName: 'Про нас',
      visible: true,
      isSection: true,
    },
    {
      address: 'find',
      displayName: 'Як знайти',
      visible: true,
      isSection: true,
    },
    {
      address: 'seasons',
      displayName: 'Сезони',
      visible: true,
      isSection: true,
    },
    {
      address: 'map',
      displayName: 'Карта',
      visible: true,
      isSection: true,
    },
    {
      address: 'gallery',
      displayName: 'Галерея',
      visible: true,
      isSection: false,
    },
    {
      address: 'products',
      displayName: 'Товари',
      visible: true,
      isSection: false,
    },
  ];
  currentSection: string | null = null;
  isMenuOpen = false;

  constructor(private router: Router) { }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('.section');
    let maxVisibleArea = 0;
    let mostVisibleSection: string | null = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      // Calculate the visible area of the section
      const visibleHeight = Math.min(
        rect.bottom,
        window.innerHeight
      ) - Math.max(rect.top, 0);

      const sectionHeight = rect.height;
      const visiblePercentage = (visibleHeight / sectionHeight) * 100;

      // Consider sections with at least 10% visibility
      if (visiblePercentage >= 10 && visibleHeight > maxVisibleArea) {
        maxVisibleArea = visibleHeight;
        mostVisibleSection = section.id;
      }
    });

    this.currentSection = mostVisibleSection;
  }
  
  ngOnInit(): void {
    this.observeRoutes();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  observeRoutes() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        untilDestroyed(this)
      )
      .subscribe(() => {
        const route = this.router.url.replace('/', '');

        this.links = this.links.map(el => ({
          ...el,
          visible: this.isLinkVisible(route, el),
        }));
      });
  }

  isLinkVisible(route: string, link: menuLink): boolean {
    if (link.preventVisibility) {
      return false;
    }

    if (link.isSection && route !== '') {
      return false;
    }

    if (link.address === route) {
      return false;
    }

    return true;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  observeSections() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.currentSection = entry?.target?.id;
          }
        });
      },
      {
        root: null, // Default is the viewport
        threshold: 0.1, // Adjust visibility threshold (50% visible)
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
}
