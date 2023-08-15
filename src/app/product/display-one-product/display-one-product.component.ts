import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductDto } from 'src/models/products/product.model';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-display-one-product',
  templateUrl: './display-one-product.component.html',
  styleUrls: ['./display-one-product.component.css']
})
export class DisplayOneProductComponent {
  @Input() product = new ProductDto();

  @Output() onDeleteHandler = new EventEmitter<boolean>();
  @Output() onBackToList = new EventEmitter<boolean>();

  backToList(){
    this.onBackToList.emit()
  }

  deleteProduct(value: boolean){
    this.onDeleteHandler.emit(value)
  }

}
