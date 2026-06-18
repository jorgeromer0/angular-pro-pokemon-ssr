import { Routes } from '@angular/router';

export const routes: Routes = [
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
  }, {
    path: '**',
    redirectTo: () => {
      return 'about';
    }
  }
];
