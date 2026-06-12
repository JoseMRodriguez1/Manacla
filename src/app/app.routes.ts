import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'nosotros', loadComponent: () => import('./features/static/about.component').then(m => m.AboutComponent) },
  { path: 'nuestra-tierra', loadComponent: () => import('./features/static/land.component').then(m => m.LandComponent) },
  { path: 'galeria', loadComponent: () => import('./features/galeria/galeria.component').then(m => m.GaleriaComponent) },
  { path: 'contacto', loadComponent: () => import('./features/static/contact.component').then(m => m.ContactComponent) },
  { path: 'calendario', loadComponent: () => import('./features/static/calendar.component').then(m => m.CalendarComponent) },
  { path: '**', redirectTo: '' }
];
