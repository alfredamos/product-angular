import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent{
  products$ = this.productService.getAllProduct();

  constructor(private productService: ProductService, private router: Router) {}

  addToCart(id: string) {
    this.router.navigate(['/dd-to-cart', id]);
  }

  backToList() {}
}
