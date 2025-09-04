import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { EmptyValuePipe } from './empty-value.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    AddressPipe,
    StatusPipe,
    EmptyValuePipe,
  ],
  exports: [
    PhonePipe,
    AddressPipe,
    StatusPipe,
    EmptyValuePipe
  ],
})
export class PipesModule {

}
