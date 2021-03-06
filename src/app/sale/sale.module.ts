import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductService } from './add-product/add-product.service';
import { FormsModule } from '@angular/forms';
// import { AppComponent } from '../app.component';

@NgModule({
  declarations: [MainComponent, AddProductComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AddProductService
  ],
  bootstrap: [MainComponent]
})
export class SaleModule { }
