import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    FilterPipe
  ]
})
export class SharedModule { }
