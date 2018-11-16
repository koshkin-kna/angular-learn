import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AddProductComponent } from './add-product/add-product.component';
// import { AppComponent } from '../app.component';

@NgModule({
  declarations: [MainComponent, AddProductComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [MainComponent]
})
export class SaleModule { }
