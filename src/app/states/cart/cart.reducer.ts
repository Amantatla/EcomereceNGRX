import { createReducer, on } from "@ngrx/store";
import { Iproduct } from "../../shared/models/product.interface";
import * as cartActions from "./cart.action";

export interface CartState {
    products: Iproduct[];
    totalPrice?: number
}

export const initialCounterState: CartState = {
    products: [],
    totalPrice: 0
}

export function calculateTotalPrice(products: Iproduct[]) {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0)
}
export const cartReducer = createReducer(
    initialCounterState,
    on(cartActions.addToCart, (state, { product }) => {
        const updatedProduct = [...state.products, product];
        return {
            ...state,
            products: updatedProduct,
            totalPrice:calculateTotalPrice(updatedProduct)
        }

    }),
    on(cartActions.incrementProduct, (state, { productId }) => {
        const updatedProduct = state.products.map((product) => product.id === productId ? { ...product, quantity: product.quantity + 1 } : product)
        return {
            ...state,
            products: updatedProduct,
            totalPrice:calculateTotalPrice(updatedProduct)
        }
    }),
    on(cartActions.decrementProduct, (state, { productId }) => {
        const updatedProduct = state.products.map((product) => product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product)
        return {
            ...state,
            products: updatedProduct,
            totalPrice:calculateTotalPrice(updatedProduct)
        }
    }),
    on(cartActions.removeItem, (state, { productId }) => {
        const updatedProduct = state.products.filter(
            (product) => product.id !== productId
        );
        return {
            ...state,
            products: updatedProduct,
            totalPrice:calculateTotalPrice(updatedProduct)
        }
    })
)