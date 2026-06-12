import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GalleryItem } from '../../core/models/content.models';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [NgClass, NgIf, NgOptimizedImage],
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent {
  private sanitizer = inject(DomSanitizer);
  private trustedUrls = new Map<string, SafeResourceUrl>();
  content = inject(ContentService);
  categories = ['Todos', 'Paisajes', 'Agricultura', 'Nuestra Gente', 'Videos'];
  activeCategory = signal('Todos');

  filteredGallery = computed(() => {
    const allItems = this.content.galleryItems();
    const active = this.activeCategory();
    if (active === 'Todos') return allItems;
    return allItems.filter(item => item.category === active);
  });

  trustedVideoUrl(item: GalleryItem): SafeResourceUrl {
    if (!item.videoId) return '';

    const cached = this.trustedUrls.get(item.videoId);
    if (cached) return cached;

    const trusted = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${item.videoId}`);
    this.trustedUrls.set(item.videoId, trusted);
    return trusted;
  }
}
