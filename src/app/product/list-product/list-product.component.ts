import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { UserType } from 'src/models/auth/user-type.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit{
  products$ = this.productService.getAllProduct();

  isAdmin!: boolean;

  constructor(private authService: AuthService, private productService: ProductService, private router: Router) {}

  ngOnInit(){
    this.authService.authUser$.subscribe(auth => {
      this.isAdmin = auth.userType === UserType.Admin;
    })
  }

  addToCart(id: string) {
    this.router.navigate(['/products/detail', id]);
  }

  backToList() {}
}
