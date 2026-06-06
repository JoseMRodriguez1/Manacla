import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GaleriaComponent } from './features/galeria/galeria.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'galeria', component: GaleriaComponent },
  // Placeholder routes for other pages
  { path: 'nosotros', loadComponent: () => import('./features/static/about.component').then(m => m.AboutComponent) },
  { path: 'nuestra-tierra', loadComponent: () => import('./features/static/land.component').then(m => m.LandComponent) },
  { path: 'contacto', loadComponent: () => import('./features/static/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' } // Redirect unknown paths to home
];
