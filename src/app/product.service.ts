import { Injectable } from '@angular/core';
import { Product } from './product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = 'https://5e79baa617314d0016133580.mockapi.io/abc';
   constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
   search(name:string): Observable<Product[]>{
    return this.http.get<Product[]>(this.api+"search="+name);
  }
  getProduct(id): Observable<Product>{
    console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.api}`, product);
  }
  removeProduct(id): Observable<Product>{
  
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}