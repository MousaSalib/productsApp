import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public search = new BehaviorSubject<string>('')
  constructor(private http: HttpClient) {}

  createNewCart(Model: any) {
    return this.http.post('https://fakestoreapi.com/products/', Model)
  }

}
