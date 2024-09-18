import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { provideHttpClient } from '@angular/common/http';
import { cartReducer } from './states/cart/cart.reducer';
import { ProductReducer } from './states/product/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { productEffect } from './states/product/product.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideStore(), provideHttpClient(),
  provideState({ name: 'counter', reducer: counterReducer }),
  provideState({ name: 'cart', reducer: cartReducer }),
  provideState({ name: 'product', reducer: ProductReducer }),
  provideEffects(productEffect)
  ]
};
