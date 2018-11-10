import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { AddProductService } from './addproduct.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})


export class AddproductComponent implements OnInit {
  //  this.renderer.addClass(document.body, 'modal-open');
  isOpen = false;
  productIsFind = false;
  barcode = '';

  constructor(
    private renderer: Renderer2,
    private addProductService: AddProductService
  ) {
  }

  ngOnInit() {
    this.addProductService.isOpen.subscribe(isOpen => {
      this.isOpen = isOpen;
      if (!this.isOpen) {
        this.barcode = '';
      }
    });
  }

  searchByBarcode() {
    console.log(this.barcode);
  }

}
