import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Iproduct } from '../../models/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product!: Iproduct;

}
