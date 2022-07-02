import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PartyListComponent } from './party-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  declarations: [
    PartyListComponent
  ],
  exports: [
    PartyListComponent
  ]
})
export class PartyListModule { }
