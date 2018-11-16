import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

/*
@Injectable({
  providedIn: 'root'
})
 */
@Injectable()
export class AddProductService {
  isOpen: BehaviorSubject<boolean>;
  subscription;


  constructor() {
    this.isOpen = new BehaviorSubject(false);
  }

  toggle() {
    this.isOpen.next(!this.isOpen.getValue());
    if (this.isOpen.getValue()) {
      this.subscription = fromEvent(document, 'keydown').subscribe(e => {
        if (e['key'] === 'Escape') {
          this.toggle();
        }
      });
    } else {
      this.subscription.unsubscribe();
    }
  }


}
