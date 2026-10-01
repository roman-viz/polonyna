import { Component } from '@angular/core';
import { FlexGalleryComponent } from '../../shared/components/flex-gallery/flex-gallery.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FlexGalleryComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {  
  imagesAmount = 179;
  images = Array.from({ length: this.imagesAmount }, (_, i) => `/assets/images/gallery/${i + 1}.webp`);
}
