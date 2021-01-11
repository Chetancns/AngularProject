import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from './../../services/products-service.service';
import {IProduct} from './../../model/iproduc';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Productlist:IProduct[];
  constructor(private productservice:ProductsServiceService) { 
    this.productservice.getProduct().subscribe((data)=>{this.Productlist=data;});
  }

  ngOnInit(): void {
  }

}
