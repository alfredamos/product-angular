import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDto } from 'src/models/products/product.model';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
  @Input() product = new ProductDto();
  @Output() onAddCart = new EventEmitter<string>()

  addToCart(id: string){
    this.onAddCart.emit(id);
  }
}
