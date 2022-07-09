import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PartyApiService } from './party-api.service';

import { PartyListModule } from './parties/list/party-list/party-list.module';
import { PartyPageModule } from './party/party-page/party-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    PartyListModule,
    PartyPageModule
  ],
  providers: [PartyApiService],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
