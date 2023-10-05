import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProductComponent } from './child-product.component';

describe('ChildProductComponent', () => {
  let component: ChildProductComponent;
  let fixture: ComponentFixture<ChildProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildProductComponent]
    });
    fixture = TestBed.createComponent(ChildProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
