import { Component } from '@angular/core';
import { FlexGalleryComponent } from '../../shared/components/flex-gallery/flex-gallery.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FlexGalleryComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  imagesAmount = 50;
  images = Array.from({ length: this.imagesAmount }, (_, i) => `/assets/images/products/${i + 1}.jpg`);
}
