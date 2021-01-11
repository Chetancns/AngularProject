import { Component, OnInit } from '@angular/core';
import {UservalidateServiceService} from './../../services/uservalidate-service.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
Finance:any[];

  constructor(private uservalidateservice:UservalidateServiceService, private router: ActivatedRoute,private route:Router) { }
  getUserfinance(Email:string){
    this.uservalidateservice.getFinance(Email).subscribe((data)=>{
      this.Finance=data;
    });
   
  }
  
  ngOnInit(): void {
    const Email=this.router.snapshot.paramMap.get('Email');
    this.getUserfinance(Email);
  }

}
