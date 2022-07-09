import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyTitleComponent } from '../party-title/party-title.component';


@NgModule({
  declarations: [
    PartyTitleComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PartyTitleComponent,
  ]
})
export class PartyTitleModule { }
