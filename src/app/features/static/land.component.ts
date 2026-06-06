import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-land',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-bg min-h-screen flex items-center justify-center">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-extrabold text-text mb-6">Nuestra Tierra</h1>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          Descubre la belleza natural, la riqueza agrícola y los paisajes que hacen de Manacla un lugar único.
          Esta sección está en desarrollo. ¡Pronto tendremos más información y fotos impresionantes!
        </p>
      </div>
    </section>
  `,
  styles: []
})
export class LandComponent {}
