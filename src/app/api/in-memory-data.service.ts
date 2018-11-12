import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const product = [
      {barcode: '12345678', title: 'Товар 1'},
      {barcode: '11111111', title: 'Товар 2'},
      {barcode: '22222222', title: 'Товар 3'},
      {barcode: '33333333', title: 'Товар 4'}
    ];
    return { product };
  }

  constructor() { }
}

/*
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryData implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return {heroes};
  }
}

 */
