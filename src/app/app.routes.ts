import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    
        path: '',
        loadComponent: () =>import('./components/product/product.component')},

    {
    
    path: 'add',
    loadComponent: () =>import('./components/product-app/product-app.component')},

    {
    path: ':id/edit',
    loadComponent: () =>import('./components/product-app/product-app.component')}
    
];
