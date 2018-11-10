import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AddProductService {

  // isOpen = BehaviorSubject<boolean>;
  isOpen: BehaviorSubject<boolean>;

  // @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.isOpen = new BehaviorSubject(false);
  }

  toggle() {
    // this.isOpen = !this.isOpen;
    // this.change.emit(this.isOpen);
    this.isOpen.next(!this.isOpen.getValue());
  }

}
