import { Component, HostListener } from '@angular/core';
import { AddProductService } from './addproduct/addproduct.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kassa';

  constructor(
    private addProductService: AddProductService
  ) {
  }
  /*
  @HostListener('click')
  click() {
    this.addProductService.toggle();
  }
  */

}
