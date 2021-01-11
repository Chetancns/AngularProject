import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from './../../services/products-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import {IProduct} from './../../model/iproduc';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  prod:IProduct;
  constructor(private productservice:ProductsServiceService,private router:ActivatedRoute,private rout:Router) { }
  getProdInfo(id:number){
    this.productservice.getProdDetails(id).subscribe((data:IProduct)=>{this.prod=data});
  }
  ProdEditSave(){
    this.productservice.editProduct(this.prod).subscribe(()=>{
      alert("Recoded Edited");
      this.rout.navigate(['/admin/products']);
    })
  }
  EditProd(prod:IProduct){
 this.prod=prod;
 this.ProdEditSave();
  }
  ngOnInit(): void {
    const id=+this.router.snapshot.paramMap.get('id');
    this.getProdInfo(id);
  }
}
