import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingUtilModule } from '@nx-cloud-demo/booking/util';
import { DummyComponent } from './dummy/dummy.component'

@NgModule({
  imports: [CommonModule, BookingUtilModule],
  declarations: [
    DummyComponent
  ],
  exports: [
    DummyComponent
  ],
})
export class BookingDomainModule {}
