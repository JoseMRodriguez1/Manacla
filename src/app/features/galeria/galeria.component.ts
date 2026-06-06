import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <section class="py-16 bg-bg min-h-screen">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-extrabold text-center text-text mb-12">Nuestra Galería</h1>

        <!-- Category Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            *ngFor="let category of categories()"
            (click)="setActiveCategory(category)"
            [ngClass]="{
              'bg-primary text-white': activeCategory() === category,
              'bg-gray-200 text-text hover:bg-gray-300': activeCategory() !== category
            }"
            class="px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ease-in-out"
          >
            {{ category }}
          </button>
        </div>

        <!-- Gallery Layout -->
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-6">
          <div
            *ngFor="let item of filteredGallery()"
            class="mb-6 break-inside-avoid group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <img
              [ngSrc]="item.imageUrl"
              [alt]="item.title"
              width="600"
              height="400"
              class="w-full h-auto object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div *ngIf="item.type === 'video'" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-lg font-semibold">{{ item.title }}</h3>
              <p class="text-sm">{{ item.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class GaleriaComponent {
  private contentService = inject(ContentService);

  // Writable signal for the active category filter
  activeCategory = signal<string>('Todos');

  // Computed signal for unique categories from gallery items
  categories = computed(() => {
    const items = this.contentService.galleryItems();
    const uniqueCategories = new Set(items.map(item => item.category));
    return ['Todos', ...Array.from(uniqueCategories)];
  });

  // Computed signal for filtered gallery items
  filteredGallery = computed(() => {
    const items = this.contentService.galleryItems();
    const currentCategory = this.activeCategory();
    if (currentCategory === 'Todos') {
      return items;
    }
    return items.filter(item => item.category === currentCategory);
  });

  setActiveCategory(category: string) {
    this.activeCategory.set(category);
  }
}
