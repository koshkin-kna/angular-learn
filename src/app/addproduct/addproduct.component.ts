import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { AddProductService } from './addproduct.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})


export class AddproductComponent implements OnInit {
  isOpen = false;
  productIsFind = false;
  barcode: string;
  response: any;
  product: any;
  private productUrl = 'api/product';

  constructor(
    private renderer: Renderer2,
    private addProductService: AddProductService,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.addProductService.isOpen.subscribe(isOpen => {
      this.isOpen = isOpen;
      if (!this.isOpen) {
        this.barcode = '';
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

  public getProduct(): Observable<Array<any>> {
    return this.http.get<any[]>(this.productUrl);
  }

  searchByBarcode() {
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

  searchProductModal() {
    alert('Возможность в поиска товара в разработке. Добавляйте товар по штрихкоду!');
  }

}


/*
    this.http.get('https://api.github.com/users/' + this.barcode)
      .subscribe(
        (response) => {
          console.log('5');
          this.response = response;
          console.log(this.response);
        },
        error => {
          console.log('6');
          console.log(error);
        },
      );
      */
