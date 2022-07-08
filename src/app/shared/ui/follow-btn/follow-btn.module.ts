import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FollowBtnComponent } from './follow-btn.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FollowBtnComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    FollowBtnComponent
  ]
})
export class FollowBtnModule { }
