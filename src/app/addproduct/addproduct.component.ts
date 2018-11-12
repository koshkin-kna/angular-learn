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
  //  this.renderer.addClass(document.body, 'modal-open');
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
      }
    });
  }

  public getProduct(): Observable<Array<any>> {
    return this.http.get<any[]>(this.productUrl);
  }

  searchByBarcode() {
    /*this.http.get('https://api.github.com/users/' + this.barcode)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
      */
    // console.log(this.barcode);
    console.log('ye serach');
    this.getProduct().subscribe(product => this.product = product);
    console.log(this.product);
  }

  searchProductModal() {
    alert('Возможность в поиска товара в разработке. Добавляйте товар по штрихкоду!');
  }

}
