import { Component, inject } from '@angular/core';
import { ContentService } from '../../../core/services/content.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-map-section',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section class="py-20 bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-5">
        <div class="text-center mb-12">
          <p class="text-sm uppercase tracking-[0.28em] text-brand-accent font-bold mb-3">Geografía</p>
          <h2 class="text-4xl font-bold text-brand-primary">Explora Manacla</h2>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 items-start">
          <div class="lg:col-span-2 relative aspect-video bg-emerald-50 rounded-2xl overflow-hidden shadow-xl border-8 border-white">
            <img ngSrc="/assets/images/manacla_map.png" alt="Mapa de Manacla" fill class="object-cover opacity-90" />
            <div class="absolute inset-0 bg-brand-primary/5"></div>

            <div class="relative w-full h-full">
               @for (point of content.mapPoints(); track point.id) {
                 <div
                   class="absolute group cursor-pointer z-10"
                   [style.left.%]="getLeft(point.lng)"
                   [style.top.%]="getTop(point.lat)">
                   <div class="bg-brand-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform ring-4 ring-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                   </div>
                   <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 border border-gray-100">
                      <p class="font-bold text-brand-primary text-sm">{{ point.name }}</p>
                      <p class="text-xs text-gray-600">{{ point.description }}</p>
                   </div>
                 </div>
               }
            </div>
          </div>

          <div class="space-y-4">
             <h3 class="text-xl font-bold text-brand-primary mb-6">Puntos de interés</h3>
             @for (point of content.mapPoints(); track point.id) {
               <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-brand-accent transition-colors group cursor-pointer">
                 <div class="flex items-center gap-3">
                    <span class="w-2 h-2 rounded-full bg-brand-accent group-hover:scale-150 transition-transform"></span>
                    <span class="font-bold text-brand-primary">{{ point.name }}</span>
                 </div>
                 <p class="text-sm text-gray-600 mt-1 ml-5">{{ point.description }}</p>
               </div>
             }
             <div class="mt-8 p-6 bg-brand-primary rounded-xl text-white shadow-lg">
                <p class="text-sm italic">"Donde el cielo se junta con la montaña, ahí está Manacla."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MapSectionComponent {
  content = inject(ContentService);

  // Expanded bounds centered around: 19.289, -71.086
  getLeft(lng: number): number {
    const min = -71.12;
    const max = -71.05;
    return ((lng - min) / (max - min)) * 80 + 10;
  }

  getTop(lat: number): number {
    const min = 19.27;
    const max = 19.31;
    return (1 - (lat - min) / (max - min)) * 80 + 10;
  }
}
