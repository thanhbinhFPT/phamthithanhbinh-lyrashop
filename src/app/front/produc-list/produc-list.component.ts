import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-produc-list',
  templateUrl: './produc-list.component.html',
  styleUrls: ['./produc-list.component.css']
})
export class ProducListComponent implements OnInit {
   page = 1;
  pageSize = 6;
products: Product[];
  constructor(
     private productService: ProductService 
     ) { 
   
  }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(Data=>{ this.products=Data})
  
  }
}