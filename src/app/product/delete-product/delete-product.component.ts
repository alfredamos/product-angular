import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent {
  id = '';
  product$ = combineLatest([
    this.productService.getAllProduct(),
    this.route.paramMap,
  ]).pipe(
    map(([productApiRes, paraMap]) => {
      this.id = paraMap.get('id')!;
      const products = productApiRes.products;
      const product = products?.find((product) => product.id === this.id);
      return product!;
    })
  );

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  deleteProduct(value: boolean) {
    if (value) {
      this.productService
        .deleteProduct(this.id)
        .subscribe(() => this.router.navigate(['/products']));
    } else {
      this.router.navigate(['/products']);
    }
  }

  backToList() {
    this.router.navigate(['/products']);
  }
}
