import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType} from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { mergeMap, map } from "rxjs";
import { ProductService } from "../../services/product.service";

@Injectable()

export class productEffects {
    private readonly actions$ = inject(Actions);
    private readonly productService = inject(ProductService);

    loadInitialProduct$ = createEffect(()=>
        this.actions$.pipe(
            ofType(ProductActions.loadInitialProduct),
            mergeMap(()=>
                this.productService.fetchProducts().pipe(
                    map(products =>                        
                        ProductActions.loadInitialProductSuccess({ products })
                    ),
                )
            )
            

        )
    )
}