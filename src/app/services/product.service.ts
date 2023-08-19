import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ProductApiResults } from 'src/models/products/product-api-response.models';
import { ProductDto } from 'src/models/products/product.model';
import { FeatureProductComponent } from '../admin/feature-product/feature-product.component';
import FeatureProductDto from 'src/models/products/feature-product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly url = 'http://localhost:3000/api/products';
  private productsSubject = new BehaviorSubject<ProductDto[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    const products = JSON.parse(this.getProductsFromStorage()) as ProductDto[];

    if (products) {
      this.updateProducts$(products);
    }
  }

  createProduct(productDto: ProductDto): Observable<ProductApiResults> {
    return this.http.post<ProductApiResults>(`${this.url}`, productDto);
  }

  deleteProduct(id: string): Observable<ProductApiResults> {
    return this.http.delete<ProductApiResults>(`${this.url}/${id}`);
  }

  editProduct(productDto: ProductDto) {
    return this.http.patch<ProductApiResults>(`${this.url}/${productDto.id}`, productDto);
  }

  getAllProduct() {
    return this.http.get<ProductApiResults>(`${this.url}`).pipe(
      tap(({ products }) => {
        this.updateProducts$(products!);
        this.setProductsInStorage(products!);
      })
    );
  }

  getProductById(id: string) {
    return this.http.get<ProductApiResults>(`${this.url}/${id}`);
  }

  updateFeature(featureProductDto: FeatureProductDto){
    return this.http.patch<ProductApiResults>(`${this.url}/feature`, featureProductDto)
  }

  updateProducts$(value: ProductDto[]) {
    this.productsSubject.next(value);
  }

  getProductsValue(): ProductDto[] {
    return this.productsSubject.getValue();
  }

  setProductsInStorage(value: ProductDto[]) {
    localStorage.setItem('products', JSON.stringify(value));
  }

  getProductsFromStorage(): string {
    return localStorage.getItem('products')!;
  }
}
