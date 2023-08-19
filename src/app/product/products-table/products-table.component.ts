import { Component, Input } from '@angular/core';
import { ProductDto } from 'src/models/products/product.model';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  @Input() products: ProductDto[] = [];
}
