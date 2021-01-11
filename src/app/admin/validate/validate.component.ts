import { Component, OnInit } from '@angular/core';

import {IUser} from './../../model/iuser'
import {UservalidateServiceService} from './../../services/uservalidate-service.service';
@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
userlist:IUser[];
  constructor(private uservalidateservic:UservalidateServiceService) { 
    this.uservalidateservic.getUserList().subscribe((data)=>{this.userlist=data;});
  }

  ngOnInit(): void {
  }

}
