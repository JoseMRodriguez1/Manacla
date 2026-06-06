import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeroContent, ProductCard, GalleryItem } from '../models/content.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private http = inject(HttpClient);
  private apiBase = '/assets/data';

  // Fetch home content and expose as a Signal
  homeContent = toSignal(
    this.http.get<HeroContent>(`${this.apiBase}/home.json`)
  );

  // Fetch all products and expose as a Signal
  allProducts = toSignal(
    this.http.get<ProductCard[]>(`${this.apiBase}/products.json`),
    { initialValue: [] }
  );

  // Computed Signal for agriculture products
  agricultureProducts = computed(() =>
    this.allProducts().filter(product => product.category === 'agriculture')
  );

  // Fetch gallery items and expose as a Signal
  galleryItems = toSignal(
    this.http.get<GalleryItem[]>(`${this.apiBase}/gallery.json`),
    { initialValue: [] }
  );

  constructor() { }
}
