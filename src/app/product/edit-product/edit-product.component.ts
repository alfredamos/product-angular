import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { ProductDto } from 'src/models/products/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit{
  id = '';
  productForm!: FormGroup;
  product$ = combineLatest([
    this.productService.getAllProduct(),
    this.route.paramMap,
  ]).pipe(
    map(([productsApiResponse, paraMap]) => {
      this.id = paraMap.get('id')!;
      const products = productsApiResponse.products;
      const product = products?.find((product) => product.id === this.id);
      console.log('In edit-product, product: ', product);
      return product;
    })
  );
  users$ = this.userService.getAllUser().pipe(
    map((userApiRes) => {
      const users = userApiRes.users!;

      return users;
    })
  );

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    fb: FormBuilder
  ) {
    this.productForm = fb.group({
      name: [''],
      company: [''],
      price: [''],
      userId: [''],
      productImage: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
      this.product$.pipe(
        tap(product => {
          this.productForm.patchValue({
            name: product?.name,
            company: product?.company,
            price: product?.price,
            description: product?.description,
            userId: product?.userId,
            productImage: product?.productImage,
          });
        })
      ).subscribe()
  }

  editCreate(value: ProductDto) {
    console.log("In edit submitter, product : ", value);

    value.id = this.id;
    this.productService
      .editProduct(value)
      .subscribe(() => this.router.navigate(['/products']));
  }

  backToList() {
    this.router.navigate(['/products']);
  }
}
