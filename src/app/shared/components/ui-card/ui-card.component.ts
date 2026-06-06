import { Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductCard } from '../../../core/models/content.models';

@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 bg-white">
      <div class="relative h-48 w-full">
        <img
          [ngSrc]="product().imageUrl"
          [alt]="product().title"
          fill
          class="object-cover w-full h-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div *ngIf="product().badge" class="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          {{ product().badge }}
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-xl font-semibold text-text mb-2">{{ product().title }}</h3>
        <p class="text-gray-600 text-sm">{{ product().description }}</p>
      </div>
    </div>
  `,
  styles: []
})
export class UiCardComponent {
  product = input.required<ProductCard>();
}
