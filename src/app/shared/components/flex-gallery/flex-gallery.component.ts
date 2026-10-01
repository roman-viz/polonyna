import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flex-gallery.component.html',
  styleUrl: './flex-gallery.component.scss'
})
export class FlexGalleryComponent implements OnInit {
  @Input() imagesAmount!: number;
  @Input() images: any[] = [];
  previewedImage: string | null = null;
  displayedImages: string[] = [];
  isLoading = false;
  page = 0;
  pageSize = 15;

  loadImages(): void {
    if (this.isLoading || this.displayedImages.length === this.imagesAmount) return;
    
    this.isLoading = true;
    const nextImages = this.images.slice(this.page * this.pageSize, (this.page + 1) * this.pageSize);
    this.page++;

    setTimeout(() => {
      this.displayedImages = [...this.displayedImages, ...nextImages];
      this.isLoading = false;

      if (this.images.length && !this.displayedImages.length) {
        this.loadImages();
      }
    }, 500);
  }

  ngOnInit(): void {
    this.loadImages();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight - 200;

    if (scrollPosition >= threshold && !this.isLoading) {
      this.loadImages();
    }
  }


  previewImage(image: string): void {
    this.previewedImage = image;
  }

  closePreview(): void {
    this.previewedImage = null;
  }
}
