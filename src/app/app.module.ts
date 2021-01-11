import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ValidateComponent } from './admin/validate/validate.component';
import { ProductsComponent } from './admin/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ApproveComponent } from './admin/approve/approve.component';
import { ProductsAddComponent } from './admin/products-add/products-add.component';
import { ProductsDisplayComponent } from './admin/products-display/products-display.component';
import { ProductsEditComponent } from './admin/products-edit/products-edit.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { FinanceComponent } from './admin/finance/finance.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ValidateComponent,
    ProductsComponent,
    ApproveComponent,
    ProductsAddComponent,
    ProductsDisplayComponent,
    ProductsEditComponent,
    UserListComponent,
    FinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
