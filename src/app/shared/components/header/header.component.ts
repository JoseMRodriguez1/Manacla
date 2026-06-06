import { Component, HostListener, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgOptimizedImage],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out"
      [ngClass]="{ 'bg-primary shadow-md': isScrolled(), 'bg-transparent': !isScrolled() }"
    >
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center">
          <a routerLink="/" class="flex items-center">
            <img ngSrc="/assets/img/Manacla-no-bg.png" alt="Manacla Logo" width="100" height="40" class="h-10 w-auto" priority>
          </a>
        </div>
        <div class="hidden md:flex space-x-8">
          <a routerLink="/nosotros" routerLinkActive="font-bold" class="text-white hover:text-accent transition-colors duration-200">Nosotros</a>
          <a routerLink="/nuestra-tierra" routerLinkActive="font-bold" class="text-white hover:text-accent transition-colors duration-200">Nuestra Tierra</a>
          <a routerLink="/galeria" routerLinkActive="font-bold" class="text-white hover:text-accent transition-colors duration-200">Galería</a>
          <a routerLink="/contacto" routerLinkActive="font-bold" class="text-white hover:text-accent transition-colors duration-200">Contacto</a>
        </div>
        <!-- Mobile menu button (optional, for future implementation) -->
        <div class="md:hidden">
          <button class="text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}
