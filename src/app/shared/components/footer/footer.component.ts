import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <!-- Top Half: Contact Block -->
    <section class="bg-primary text-white py-12">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="text-center md:text-left">
          <h2 class="text-3xl font-bold mb-4">Conéctate con Manacla</h2>
          <p class="text-lg">
            ¿Tienes preguntas, sugerencias o quieres colaborar? Estamos aquí para escucharte.
            Envíanos un mensaje y nos pondremos en contacto contigo.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-xl">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
            <div>
              <label for="name" class="block text-text text-sm font-medium mb-1">Nombre</label>
              <input
                id="name"
                type="text"
                formControlName="name"
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Tu Nombre"
              />
              <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" class="text-red-500 text-xs mt-1">
                El nombre es requerido.
              </div>
            </div>
            <div>
              <label for="email" class="block text-text text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                formControlName="email"
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="tu@ejemplo.com"
              />
              <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="text-red-500 text-xs mt-1">
                Por favor, ingresa un email válido.
              </div>
            </div>
            <div>
              <label for="message" class="block text-text text-sm font-medium mb-1">Mensaje</label>
              <textarea
                id="message"
                formControlName="message"
                rows="4"
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Tu Mensaje"
              ></textarea>
              <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" class="text-red-500 text-xs mt-1">
                El mensaje es requerido.
              </div>
            </div>
            <button
              type="submit"
              [disabled]="contactForm.invalid"
              class="w-full bg-secondary text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Bottom Half: Global Footer -->
    <footer class="bg-text text-white py-8">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <!-- Column 1: Brand Info -->
        <div>
          <h3 class="text-xl font-bold mb-3">Manacla</h3>
          <p class="text-sm">
            Un proyecto dedicado a preservar y promover la riqueza cultural y natural de la comunidad de Manacla, República Dominicana.
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-3">Enlaces Rápidos</h3>
          <ul class="space-y-2">
            <li><a routerLink="/nosotros" class="hover:text-accent transition-colors duration-200">Nosotros</a></li>
            <li><a routerLink="/nuestra-tierra" class="hover:text-accent transition-colors duration-200">Nuestra Tierra</a></li>
            <li><a routerLink="/galeria" class="hover:text-accent transition-colors duration-200">Galería</a></li>
            <li><a routerLink="/contacto" class="hover:text-accent transition-colors duration-200">Contacto</a></li>
          </ul>
        </div>

        <!-- Column 3: Social & Copyright -->
        <div>
          <h3 class="text-xl font-bold mb-3">Síguenos</h3>
          <div class="flex justify-center md:justify-start space-x-4 mb-4">
            <!-- Placeholder for social media icons -->
            <a href="#" class="text-white hover:text-accent"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-white hover:text-accent"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-white hover:text-accent"><i class="fab fa-twitter"></i></a>
          </div>
          <p class="text-sm">&copy; {{ currentYear }} Manacla. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  currentYear = new Date().getFullYear();

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      // Here you would typically send the data to a backend service
      alert('Mensaje enviado con éxito! (Simulado)');
      this.contactForm.reset();
    } else {
      console.log('Form is invalid');
      // Mark all fields as touched to display validation messages
      this.contactForm.markAllAsTouched();
    }
  }
}
