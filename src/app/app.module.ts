import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PartyApiService } from './party-api.service';

import { PartyListModule } from './parties/list/party-list/party-list.module';
import { PartyTitleComponent } from './party/party-title/party-title.component';
import { PartyDateComponent } from './party/party-date/party-date.component';
import { PartyAddressComponent } from './party/party-address/party-address.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyTitleComponent,
    PartyDateComponent,
    PartyAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    PartyListModule
  ],
  providers: [PartyApiService],
  bootstrap: [AppComponent],
  exports: [
    PartyTitleComponent,
  ]
})
export class AppModule { }
