import { Component, OnInit, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})


export class AddproductComponent implements OnInit {
  modalOpen = false;
  //body = document.getElementsByTagName('body')[0];
  @Input('data')
  set data(data: boolean) {
    if (data) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  openModal() {
    this.modalOpen = true;
    this.renderer.addClass(document.body, 'modal-open');
    console.log('func open modal');
  }

  closeModal() {
    this.modalOpen = false;
    this.renderer.removeClass(document.body, 'modal-open');
    console.log('func close modal');
  }

  constructor(private renderer: Renderer2) {
   // renderer = renderer;
  }

  ngOnInit() {
    // const body = document.getElementsByTagName('body')[0];
    // this.question = this.data;
    // console.log(this.question);
  }

}
