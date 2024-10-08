import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Iproduct } from '../../models/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product!: Iproduct;
  // @Output() handleAdd = new EventEmitter
  handleAdd = output<Iproduct>();

  addToCart(product: Iproduct) {
    this.handleAdd.emit(product)
  }
}
