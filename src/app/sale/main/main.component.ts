import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../add-product/add-product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public service: AddProductService
  ) { }

  ngOnInit() {
  }

}
