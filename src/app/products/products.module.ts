import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ChildProductComponent } from './components/child-product/child-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailsComponent,
    ChildProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule


  ],
  exports: [
    ProductsListComponent,
    ProductsDetailsComponent,
    ChildProductComponent,
    FormsModule
  ]
})
export class ProductsModule { }
