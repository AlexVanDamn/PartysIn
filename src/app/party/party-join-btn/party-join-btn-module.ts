import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { PartyJoinBtnComponent } from './party-join-btn.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PartyJoinBtnComponent,
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PartyJoinBtnComponent
  ]
})
export class PartyJoinBtnModule { }
