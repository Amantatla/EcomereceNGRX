import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductApiService } from '../shared/services/product-api.service';
import { map, Observable } from 'rxjs';
import { Iproduct } from '../shared/models/product.interface';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  param!: number
  api = inject(ProductApiService)
  route = inject(ActivatedRoute)
  product$!: Observable<Iproduct>
  constructor(private store: Store<{ cart: { products: Iproduct[] } }>) { }
  ngOnInit(): void {
    this.param = Number(this.route.snapshot.paramMap.get('id'));
    this.product$ = this.api.getSingleProduct(this.param)
  }
  addItemToCart(product: Iproduct) {
    this.store.dispatch(addToCart({ product }))
  }
}
