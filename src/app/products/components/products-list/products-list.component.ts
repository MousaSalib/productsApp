import { Component } from '@angular/core';
import { ServiceProductsService } from '../../services/service-products.service';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  Products: any[] =[];
  loading:boolean = false;
  cartProducts: any[] = []
  searchKey: string = '';
  constructor (private service: ServiceProductsService, private cartService: CartServiceService) {}
  ngOnInit() {
    this.getProducts();
    this.cartService.search.subscribe(val => {
      this.searchKey = val
    })
  }
  getProducts() {
    this.loading = true
    return this.service.getAllProducts().subscribe((res: any) => {
      console.log(res)
      this.Products = res
      this.loading = false
    }, error => {
      alert("error")
    })
  }
  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!) || [];
      if (this.cartProducts.length > 0) {
        let exist = this.cartProducts.find(item => item?.item?.id === event?.item?.id);
        if (exist) {
          alert("The product is already exist in your cart! You can increase the product from your cart");
        } else {
          this.cartProducts.push(event);
          localStorage.setItem("cart", JSON.stringify(this.cartProducts));
        }
      } else {
        this.cartProducts.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }


}
