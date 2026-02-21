import { Component } from '@angular/core';
import { product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit()
  {
    this.getAllProducts();
  }

  getAllProducts()
  {
    this.productService.fetchProducts().subscribe(result =>{
      this.productList = result;
      console.log('products:', this.productList);      
    })
  }

}
