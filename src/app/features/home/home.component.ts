import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContentService } from '../../core/services/content.service';
import { UiCardComponent } from '../../shared/components/ui-card/ui-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, UiCardComponent, RouterLink],
  template: `
    <!-- Hero Section -->
    <section
      class="relative h-screen flex items-center justify-center text-white text-center"
      [style.backgroundImage]="'url(' + (content.homeContent()?.backgroundMediaUrl || '') + ')'"
      style="background-size: cover; background-position: center;"
    >
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div class="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          {{ content.homeContent()?.title }}
        </h1>
        <p class="text-lg md:text-xl mb-8">
          {{ content.homeContent()?.subtitle }}
        </p>
        <a
          [routerLink]="['/nuestra-tierra']"
          class="bg-primary hover:bg-accent text-white text-lg font-semibold py-3 px-8 rounded-full transition-colors duration-300"
        >
          {{ content.homeContent()?.primaryCta }}
        </a>
      </div>
    </section>

    <!-- About Split Section -->
    <section class="py-16 bg-bg">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2 text-center md:text-left">
          <h2 class="text-4xl font-bold text-text mb-6">Descubre Manacla</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            Ubicada en el corazón de la República Dominicana, Manacla es una comunidad vibrante
            donde la tradición y la naturaleza se entrelazan. Famosa por sus fértiles tierras
            y la calidez de su gente, Manacla es un testimonio vivo de la riqueza cultural
            y agrícola del país. Aquí, cada amanecer trae consigo la promesa de una nueva
            cosecha y la continuidad de un legado ancestral.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Nuestra comunidad se enorgullece de sus productos orgánicos, su ganadería sostenible
            y sus paisajes impresionantes. Te invitamos a explorar la esencia de Manacla,
            un lugar donde la vida rural dominicana se vive en su máxima expresión.
          </p>
        </div>
        <div class="md:w-1/2">
          <img
            ngSrc="/assets/img/manacla-community.jpg"
            alt="Comunidad de Manacla"
            width="800"
            height="600"
            class="rounded-lg shadow-xl w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>

    <!-- Agriculture Grid Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-text text-center mb-12">Nuestros Productos Agrícolas</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-ui-card *ngFor="let product of content.agricultureProducts()" [product]="product"></app-ui-card>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent {
  content = inject(ContentService);

  // Placeholder for the image used in the "About Split Section"
  // You'll need to place an actual image at /assets/img/manacla-community.jpg
  // For now, I'll just mention it here.
  // Also, ensure /assets/img/hero-bg.jpg exists for the Hero Section.
}
