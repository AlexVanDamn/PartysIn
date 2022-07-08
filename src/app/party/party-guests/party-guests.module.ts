import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PartyGuestsComponent } from './party-guests.component';


@NgModule({
  declarations: [
    PartyGuestsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    PartyGuestsComponent
  ]
})
export class PartyGuestsModule { }
