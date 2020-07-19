import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),

    })
  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }
   addProduct(){
this.productService.addProduct(this.product).subscribe(Data => {
      this.router.navigateByUrl('dashboard');
      })
}

clear(){
  var name = <HTMLInputElement>document.getElementById("name");
  name.value = null;
  var price = <HTMLInputElement>document.getElementById("price");
  price.value = null;
  var img = <HTMLInputElement>document.getElementById("img");
  img.value = null;
  var desc = <HTMLInputElement>document.getElementById("desc");
  desc.value = null;
  
}
}