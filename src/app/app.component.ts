import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from "../shared/fadeInAnimation";
import {PaymentService} from "./payment/payment.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AppComponent implements  OnInit {

  constructor( private paymentServic: PaymentService) {}

  providers: any = [];

  ngOnInit() {
    this.paymentServic.getProvides()
      .pipe(
        tap ((res)=> console.log(res))
      )
      .subscribe(
      (res)=> this.providers = res.providers
    )
  }
}
