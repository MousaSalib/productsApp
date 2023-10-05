import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/cart/cart.component';

const routes: Routes = [
  {
    path: "list",
    component: ProductsListComponent
  },
  {
    path: "details/:id",
    component: ProductsDetailsComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "**",
    redirectTo: "list",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
