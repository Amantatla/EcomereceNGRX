import { createAction, props } from "@ngrx/store";
import { Iproduct } from "../../shared/models/product.interface";

export const addToCart = createAction('[Cart Component] addToCart', props<{ product: Iproduct }>());
export const incrementProduct = createAction('[Cart Component] IncrementProduct', props<{ productId: number }>());
export const decrementProduct = createAction('[Cart Component] DecrementProduct', props<{ productId: number }>());
export const removeItem = createAction('[Cart Component] RemoveItem', props<{ productId: number }>());