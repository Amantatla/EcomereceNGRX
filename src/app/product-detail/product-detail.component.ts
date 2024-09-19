import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductApiService } from '../shared/services/product-api.service';
import { Observable } from 'rxjs';
import { Iproduct } from '../shared/models/product.interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  api = inject(ProductApiService)
  product$ = this.api.getSingleProduct(1) as Observable<Iproduct>
  constructor() {
  }

}
