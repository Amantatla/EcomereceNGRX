import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from "../shared/Components/product-card/product-card.component";
import { Iproduct } from '../shared/models/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  http = inject(HttpClient);
  product$ = this.http.get('https://fakestoreapi.com/products') as Observable<Iproduct[]>
}
