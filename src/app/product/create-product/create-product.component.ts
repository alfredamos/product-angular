import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { ProductDto } from 'src/models/products/product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  users$ = this.userService.getAllUser().pipe(
    map(userApiRes => {
      const users = userApiRes.users!;

      return users
    })
  )

  productForm: FormGroup;

  constructor(private productService: ProductService, private userService: UserService, private router: Router, fb: FormBuilder){
    this.productForm = fb.group({
      name: [''],
      company: [''],
      price: [''],
      userId: [''],
      productImage: [''],
      description: ['']
    });
  }

  productCreate(value: ProductDto){
    this.productService.createProduct(value).subscribe(() => this.router.navigate(["/list-product"]))
  }

  backToList(){
    this.router.navigate(["/list-product"]);
  }

}
