import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import FeatureProductDto from 'src/models/products/feature-product.model';

@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.css']
})
export class FeatureProductComponent implements OnInit{
  featureProductForm: FormGroup;
  id = "";

  constructor(fb: FormBuilder, private productService: ProductService, private route: ActivatedRoute, private router: Router){
    this.featureProductForm = fb.group({
      name: '',
      company: '',
      price: 0,
      featured: false,
    });
  }

  ngOnInit():void{
    combineLatest([this.productService.getAllProduct(), this.route.paramMap]).pipe(map(([productApiRes, paraMap]) => {
      this.id = paraMap.get('id')!;
      const product = productApiRes?.products?.find(product => product.id === this.id)
      this.featureProductForm.patchValue({
        id: product?.id,
        name: product?.name,
        company: product?.company,
        price: product?.price,
        featured: product?.featured
      })
    })).subscribe()
  }

  productSubmit(value: FeatureProductDto){
    value.id = this.id;
    value.featured = Boolean(value.featured)
    
    this.productService.updateFeature(value).subscribe(() => this.router.navigate(['list-product']));
  }

  backToList(){
    this.router.navigate(["list-product"]);
  }
}
