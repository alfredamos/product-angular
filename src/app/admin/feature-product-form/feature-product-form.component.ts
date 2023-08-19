import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import FeatureProductDto from 'src/models/products/feature-product.model';

@Component({
  selector: 'app-feature-product-form',
  templateUrl: './feature-product-form.component.html',
  styleUrls: ['./feature-product-form.component.css'],
})
export class FeatureProductFormComponent {
  @Input() featureProductForm = this.fb.group({
    name: '',
    company: '',
    price: 0,
    featured: false,
  });

  @Output() onFeatureProductFormSubmit = new EventEmitter<FeatureProductDto>();
  @Output() onBackToList = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {}

  productSubmit(){
    const formValue = this.featureProductForm.value as FeatureProductDto;
    this.onFeatureProductFormSubmit.emit(formValue)!
  }

  backToList(){
    this.onBackToList.emit()
  }
}
