import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { PaymentComponent } from "./payment/payment.component";

const routes: Routes = [
  { path: 'payment/:name', component: PaymentComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  AppComponent,
  PaymentComponent,
];
