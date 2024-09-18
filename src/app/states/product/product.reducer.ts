import { createReducer, on } from "@ngrx/store";
import { Iproduct } from "../../shared/models/product.interface";
import * as productAction from './product.action'

export interface ProductState {
    products: Iproduct[];
    error: string | null;
}

export const productIntalState: ProductState = {
    products: [],
    error: null
}
export const ProductReducer = createReducer(
    productIntalState,
    on(productAction.loadProductSuccess, (state, { products }) => ({
        ...state,
        products,
        error: null
    })),
    on(productAction.loadProductFailed, (state, { errorMessage }) => ({
        ...state,
        error: errorMessage
    }))
)