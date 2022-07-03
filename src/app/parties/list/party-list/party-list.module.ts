import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PartyListComponent } from './party-list.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    PartyListComponent
  ],
  exports: [
    PartyListComponent
  ]
})
export class PartyListModule { }
