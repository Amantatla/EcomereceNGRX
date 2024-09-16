import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from "../shared/Components/product-card/product-card.component";
import { Iproduct } from '../shared/models/product.interface';
import { ProductApiService } from '../shared/services/product-api.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  product_api = inject(ProductApiService)
  http = inject(HttpClient);
  product$ = this.product_api.getProducts() as Observable<Iproduct[]>

  constructor(private store: Store<{ cart: { products: Iproduct[] } }>) { }

  ngOnInit(): void {
  }
  addItemToCart(product: Iproduct) {
    this.store.dispatch(addToCart({ product }))
  }
}
