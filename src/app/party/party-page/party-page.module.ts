import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PartyPageComponent } from './party-page.component';
import { PartyTitleModule } from '../party-title/party-title.module';
import { PartyFacade } from '../party.facade';
import { PartyDateComponent } from '../party-date/party-date.component';
import { PartyAddressComponent } from '../party-address/party-address.component';
import { PartyGuestsModule } from '../party-guests/party-guests.module';
import { PartyJoinBtnModule } from '../party-join-btn/party-join-btn-module';
import { PartyBannerComponent } from '../party-banner/party-banner.component';
import { PartyCreatedByModule } from '../party-created-by/party-created-by.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,

    MatIconModule,

    PartyCreatedByModule,
    PartyTitleModule,
    PartyGuestsModule,
    PartyJoinBtnModule,
  ],
  declarations: [
    PartyPageComponent,
    PartyDateComponent,
    PartyAddressComponent,
    PartyBannerComponent
  ],
  exports: [
    PartyPageComponent
  ],
  providers: [
    PartyFacade
  ],
})

export class PartyPageModule { }
