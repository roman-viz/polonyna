import { Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { 
    path: 'gallery', 
    component: GalleryComponent 
  },
  { 
    path: 'products', 
    component: ProductsComponent 
  },
];
