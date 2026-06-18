import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page')
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-page')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-page')
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];