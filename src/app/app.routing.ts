import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './shared/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' }, 
  { path: '**', component: PageNotFoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
