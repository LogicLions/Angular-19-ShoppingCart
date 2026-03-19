import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {provideStore} from '@ngrx/store'
import { provideEffects } from '@ngrx/effects';
import { productReducer } from './state/product/product.reducer';
import { productEffects } from './state/product/product.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      product: productReducer
    }),
    provideEffects([productEffects])
]
};
