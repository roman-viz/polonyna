import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexGalleryComponent } from './flex-gallery.component';

describe('FlexGalleryComponent', () => {
  let component: FlexGalleryComponent;
  let fixture: ComponentFixture<FlexGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
