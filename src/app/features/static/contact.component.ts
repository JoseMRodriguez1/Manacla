import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  // Properties to bind to form inputs
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  private googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbyp1aNg5q5IdYd4q52Kqsn5zORlGZtPQh7dp0Jln0VcjokNU0iTuLLj32aVmdR6AyA/exec';

  constructor(private http: HttpClient) {} // Inject HttpClient

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('subject', this.subject);
    formData.append('message', this.message);

    this.http.post(this.googleAppsScriptUrl, formData, { responseType: 'text' }).subscribe({ // Added responseType: 'text'
      next: (response) => {
        console.log('Form submitted successfully!', response);
        alert('¡Mensaje enviado con éxito! Gracias por contactarnos.');
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
      }
    });
  }
}
