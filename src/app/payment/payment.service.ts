import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import sample = require("lodash/fp/sample");

export interface Provider {
  name: string,
  prefix: number[],
}

export class Providers {
  providers: Provider[] = [
    {
      name: 'Мегафон',
      prefix: [921, 931],
    },
    {
      name: 'МТС',
      prefix: [911, 910],
    },
    {
      name: 'Билайн',
      prefix: [904, 906],
    },
    {
      name: 'Теле2',
      prefix: [952, 999],
    }
  ]

  constructor () {}
}

@Injectable()
export class PaymentService {

  getProvides(): Observable<Providers> {
    const request = new Providers();

    return Observable.of(request);
  }

  send(): Observable<boolean> {
    const randRequest = sample([true, false]);

    return Observable.of(randRequest).delay(2000);
  }
}
