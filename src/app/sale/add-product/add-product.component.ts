import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

import { AddProductService } from './add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  isOpen = false;
  barcode = '';
  productIsFind = false;
  response: any;
  product: any;
  private productUrl = 'api/product';

  constructor(
    public service: AddProductService,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit() {
    this.service.isOpen.subscribe(isOpen => {
      this.isOpen = isOpen;
      if (!this.isOpen) {
        // this.barcode = '';
        this.renderer.removeStyle(document.documentElement, 'overflow');
        this.renderer.removeStyle(document.documentElement, 'touch-action');
        this.renderer.removeStyle(document.documentElement, '-ms-touch-action');
      } else {
        this.renderer.setStyle(document.documentElement, 'overflow', 'hidden');
        this.renderer.setStyle(document.documentElement, 'touch-action', 'none');
        this.renderer.setStyle(document.documentElement, '-ms-touch-action', 'none');
      }
    });
  }

 /* searchByBarcode() {
    this.getProduct().subscribe(
      (response) => {
        this.product = response;
        console.log(this.product);
      },
      error => {
        console.log(error);
      },
    );
  }
  */
  searchByBarcode() {
    alert('Поискали товар');
  }
  searchProductModal() {
    alert('Возможность в поиска товара в разработке. Добавляйте товар по штрихкоду!');
  }
}
