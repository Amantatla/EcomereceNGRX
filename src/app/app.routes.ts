import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'product', 
        pathMatch: 'full'
    },
    {
        path: 'counter',
        loadComponent: ()=> import('./counter/counter.component').then(a => a.CounterComponent)
    },
    {
        path: 'product',
        loadComponent: ()=> import('./product/product.component').then(a => a.ProductComponent)
    },
    {
        path: 'cart',
        loadComponent: ()=> import('./cart/cart.component').then(a => a.CartComponent)
    },
    {
        path: 'details/:id',
        loadComponent: ()=> import('./product-detail/product-detail.component').then(a => a.ProductDetailComponent)
    },
];
