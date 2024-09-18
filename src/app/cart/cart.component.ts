import { Component, inject } from '@angular/core';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCartProducts, selectTotal } from '../states/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { decrementProduct, incrementProduct, removeItem } from '../states/cart/cart.action';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  store = inject(Store<AppState>)
  cartItem$ = this.store.select(selectCartProducts);
  totalPrice$ = this.store.select(selectTotal)

  increment(id: { productId: number }) {
    this.store.dispatch(incrementProduct(id))
  }
  decrement(id: { productId: number }) {
    this.store.dispatch(decrementProduct(id))
  }
  removeItem(id: { productId: number }) {
    this.store.dispatch(removeItem(id))
  }
}
