import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrls: ['./child-product.component.css']
})
export class ChildProductComponent {
  @Input() data: any = {};
  @Output() item = new EventEmitter();
  addButton:boolean = false;
  amount: number = 0

  add() {
    return this.item.emit({item: this.data, quantity: this.amount})
  }

}
