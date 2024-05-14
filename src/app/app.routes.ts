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
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.page').then( m => m.ExperiencePage)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.page').then( m => m.PageNotFoundPage)
  },
];
