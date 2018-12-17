import { Component, OnInit } from '@angular/core';
import {slideInOutAnimation} from "../../shared/slideInOutAnimation";
import {ActivatedRoute, Router} from "@angular/router";
import {PaymentService} from "./payment.service";
import {finalize} from "rxjs/operators";
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from "@angular/forms";

export function forbiddenPhoneValidator(maskRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const confirm = maskRe.test(control.value);
    return !confirm ? {'mismatch': {mismatch: true}} : null;
  };
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})

export class PaymentComponent implements OnInit {

    title = 'Пополнение баланса';
    paymentForm = this.fb.group({
      phone: ['',
        [ Validators.required,
          forbiddenPhoneValidator(/\(\d{3}\)\s\d{3}-\d{2}-\d{2}/)]
        ],
      cash: ['',
        [ Validators.required,
          Validators.pattern(/^[1-9]{1}\d{0,3}$/),
          Validators.max(1000), ]
      ]
    });

    request = false;
    resError = false;
    resComplete = false;
    public phoneMask = ['(',/[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private paymentService: PaymentService,
      private fb: FormBuilder) { }

    ngOnInit() {
      let providerName = String(this.route.snapshot.params['name']);
      if (providerName) {
        this.title = `Пополнение баланса ${providerName}`;
      }
    }

    sendPayment() {
      if(this.paymentForm.valid){
        this.resError = false;
        this.request = true;

        this.paymentService.send()
          .pipe(
            finalize(()=> this.request = false)
          )
          .subscribe(
            result =>  {
              if (result) {
                this.resComplete = true;
                setTimeout(() =>  this.router.navigate(['']), 2000)
              } else {
                this.resError = true;
              }
            }
          );
      } else {
        this.paymentForm.controls['phone'].markAsTouched();
        this.paymentForm.controls['cash'].markAsTouched();
      }
    }
}
