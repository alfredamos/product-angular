import { NgModule } from '@angular/core';
import { ListProductComponent } from './list-product/list-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductFormComponent } from './form/product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { DisplayOneProductComponent } from './display-one-product/display-one-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsTableComponent } from './products-table/products-table.component';

@NgModule({
  declarations: [
    ListProductComponent,
    CreateProductComponent,
    EditProductComponent,
    DetailProductComponent,
    DeleteProductComponent,
    ProductFormComponent,
    ProductDisplayComponent,
    DisplayOneProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductsTableComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProductModule { }
