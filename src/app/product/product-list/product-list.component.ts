import { Component, inject } from '@angular/core';
import { product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { productState } from '../../state/product/product.reducer';
import * as ProductActions from '../../state/product/product.actions';
import * as ProductSelectors from '../../state/product/product.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // productList: product[] = [];

  private readonly store = inject(Store<productState>);
  productList$ = this.store.select(ProductSelectors.selectProducts);

  ngOnInit(){
    this.store.dispatch(ProductActions.loadInitialProduct());
  }

}
