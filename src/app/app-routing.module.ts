import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ValidateComponent} from './admin/validate/validate.component';
import {ProductsComponent} from './admin/products/products.component';
import {ApproveComponent} from './admin/approve/approve.component';
import {ProductsAddComponent} from './admin/products-add/products-add.component';
import {ProductsDisplayComponent} from './admin/products-display/products-display.component';
import {ProductsEditComponent} from './admin/products-edit/products-edit.component';
import {UserListComponent} from './admin/user-list/user-list.component';
import {FinanceComponent} from './admin/finance/finance.component';
const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'admin/validate',component:ValidateComponent},
  {path:'admin/products',component:ProductsComponent},
  {path:'admin/approve/:Email',component:ApproveComponent},
  {path:'admin/products/add',component:ProductsAddComponent},
  {path:'admin/products/display/:id',component:ProductsDisplayComponent},
  {path:'admin/products/edit/:id',component:ProductsEditComponent},
  {path:'admin/finance',component:UserListComponent},
  {path:'admin/finance/financedetails/:Email',component:FinanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
