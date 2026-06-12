import { HttpClient } from '@angular/common/http';
import { computed, Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GalleryItem, HeroContent, MapPoint, PersonProfile, ProductCard } from '../models/content.models';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private http = inject(HttpClient);
  private apiBase = '/assets/data';

  homeContent = toSignal(this.http.get<HeroContent>(`${this.apiBase}/home.json`));

  allProducts = toSignal(
    this.http.get<ProductCard[]>(`${this.apiBase}/products.json`),
    { initialValue: [] }
  );

  agricultureProducts = computed(() =>
    this.allProducts().filter(product => product.category === 'agriculture')
  );

  galleryItems = toSignal(
    this.http.get<GalleryItem[]>(`${this.apiBase}/gallery.json`),
    { initialValue: [] }
  );

  people = toSignal(
    this.http.get<PersonProfile[]>(`${this.apiBase}/people.json`),
    { initialValue: [] }
  );

  mapPoints = toSignal(
    this.http.get<MapPoint[]>(`${this.apiBase}/map.json`),
    { initialValue: [] }
  );

  getWeather(): Observable<any> {
    // San José de las Matas coordinates roughly: 19.289164, -71.086258
    // Using a public API like Open-Meteo (no key required for basic use)
    return this.http.get('https://api.open-meteo.com/v1/forecast?latitude=19.289164&longitude=-71.086258&current=temperature_2m,relative_humidity_2m,weather_code');
  }
}
