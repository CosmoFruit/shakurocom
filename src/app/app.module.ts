import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PaymentService} from "./payment/payment.service";
import {AppRoutingModule, routedComponents} from "./app-routing.module";
import {TextMaskModule} from "angular2-text-mask";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButton, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatProgressSpinnerModule
} from "@angular/material";


@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TextMaskModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
