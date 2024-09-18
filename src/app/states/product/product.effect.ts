import { inject, Injectable } from "@angular/core";
import { ProductApiService } from "../../shared/services/product-api.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as productAction from './product.action';
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class productEffect {
    private api = inject(ProductApiService);
    action$ = inject(Actions);

    loadProduct$ = createEffect(() => this.action$.pipe(
        ofType(productAction.loadProduct),
        switchMap(() =>
            this.api.getProducts().pipe(
                map((res) => productAction.loadProductSuccess({ products: res })),
                catchError((error: { message: string }) => of(
                    productAction.loadProductFailed({ errorMessage: 'Fail to load Products' })
                ))
            )
        )
    ))
}