import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@nx-cloud-demo/booking/domain';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [
    DummyComponent
  ],
  exports: [
    DummyComponent
  ],
})
export class BookingFeature2Module {}






































































