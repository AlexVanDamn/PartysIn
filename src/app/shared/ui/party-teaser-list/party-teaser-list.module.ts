import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {RouterModule} from '@angular/router';
import { PartyTeaserListComponent } from './party-teaser-list.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule
  ],
  declarations: [
    PartyTeaserListComponent,
  ],
  exports: [
    PartyTeaserListComponent
  ]
})
export class PartyTeaserListModule { }
