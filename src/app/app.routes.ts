import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.page').then( m => m.ProjectsPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'projects/sspdf',
    loadComponent: () => import('./pages/sspdf/sspdf.page').then( m => m.SSPDFPage)
  },
  {
    path: 'projects/snake',
    loadComponent: () => import('./pages/snake/snake.page').then(m => m.SnakePage)
  },
  {
    path: 'projects/cipher',
    loadComponent: () => import('./pages/cipher/cipher.page').then(m => m.CipherPage)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.page').then( m => m.PageNotFoundPage)
  },
];
