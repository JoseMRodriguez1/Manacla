import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-bg min-h-screen flex items-center justify-center">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-extrabold text-text mb-6">Contacto</h1>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          ¡Nos encantaría saber de ti! Utiliza el formulario en el pie de página para enviarnos un mensaje,
          o encuentra aquí otras formas de contactarnos.
          Esta página se complementará con más detalles de contacto.
        </p>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {}
