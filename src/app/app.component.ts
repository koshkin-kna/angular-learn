import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalAddProductShow = false;
  title = 'kassa';

  clickTest() {
    this.modalAddProductShow = !this.modalAddProductShow;
  }

}
