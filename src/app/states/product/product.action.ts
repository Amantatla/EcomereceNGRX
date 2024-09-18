import { createAction, props } from "@ngrx/store";
import { Iproduct } from "../../shared/models/product.interface";

export const loadProduct = createAction('[Product Component] loadProduct');
export const loadProductSuccess = createAction('[Product Component] loadProductSuccess', props<{products: Iproduct[]}>());
export const loadProductFailed = createAction('[Product Component] loadProductFailed', props<{errorMessage: string}>());