import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url : string = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  fetchProducts(): Observable<product[]>
  {
    return this.httpClient.get<product[]>(this.url);
  }
}
