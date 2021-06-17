import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingFeature1Module } from '@nx-cloud-demo/booking/feature1';
import { BookingFeature2Module } from '@nx-cloud-demo/booking/feature2';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BookingFeature1Module, BookingFeature2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
