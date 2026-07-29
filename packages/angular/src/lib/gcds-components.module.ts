import { CommonModule, } from '@angular/common';
import { NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';

import { GcdsCellDirective } from '../lib/directives/gcds-cell.directive';
import { GcdsRouterDirective } from '../lib/directives/gcds-router-link';
import { GcdsTableWithSlotsComponent } from './gcds-table-with-slots.component';
import { SelectValueAccessor } from './stencil-generated/select-value-accessor';
import { TextValueAccessor } from './stencil-generated/text-value-accessor';

const DECLARATIONS = [
  ...DIRECTIVES,
  // ngModel Accessors
  SelectValueAccessor,
  TextValueAccessor,
  GcdsRouterDirective,
  GcdsCellDirective,
  GcdsTableWithSlotsComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class GcdsComponentsModule {}
