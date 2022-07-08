import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PartyCreatedByComponent } from './party-created-by.component';
import { MatButtonModule } from '@angular/material/button';
import { FollowBtnModule } from 'src/app/shared/ui/follow-btn/follow-btn.module';


@NgModule({
  declarations: [
    PartyCreatedByComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,

    FollowBtnModule
  ],
  exports: [
    PartyCreatedByComponent
  ]
})


export class PartyCreatedByModule { }
