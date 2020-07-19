import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   page = 1;
  pageSize = 3;
  name:String;
  products: Product[];
  constructor(
    private productSevice: ProductService
  ) { }

  ngOnInit():void {
    this.getProducts();
  }
  removeItem(id){
    this.products= this.products.filter(products => products.id !==id);
  }
  getProducts(){
    this.productSevice.getProducts().subscribe(Data=>{ this.products=Data})

  }
  search(){
    if(this.name !=""){
      this.products=this.products.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }else if(this.name == ""){
      this.ngOnInit();
    }
    
  }
}
