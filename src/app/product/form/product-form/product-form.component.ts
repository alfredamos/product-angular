import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserDto } from 'src/models/auth/user.model';
import { ProductDto } from 'src/models/products/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  @Input() productForm = this.fb.group({
    name: ['', [Validators.required]],
    company: ['', [Validators.required]],
    price: [0, [Validators.required]],
    userId: [''],
    description: [''],
    productImage: [''],
    featured: [false],
    rating: [1]
  });

  @Input() formName = "Create";
  @Input() users: UserDto[] = [];

  @Output() onProduct = new EventEmitter<ProductDto | null>();
  @Output() onBackToList = new EventEmitter<void>();

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  get company() {
    return this.productForm.get('company');
  }

  constructor(private fb: FormBuilder) {}

  onProductSubmit() {
    this.onProduct.emit(this.productForm.value as ProductDto);
  }

  backToList() {
    this.onBackToList.emit();
  }
}
