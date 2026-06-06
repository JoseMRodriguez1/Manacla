import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-bg min-h-screen flex items-center justify-center">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-extrabold text-text mb-6">Sobre Nosotros</h1>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          Aquí podrás encontrar información detallada sobre la historia, misión y visión de la comunidad de Manacla.
          Estamos trabajando en el contenido de esta sección. ¡Vuelve pronto para más actualizaciones!
        </p>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {}
