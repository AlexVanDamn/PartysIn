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

@NgModule({
  declarations: [
    AppComponent,
    PartyTitleComponent,
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

  
    PartyTitleComponent
  ]
})
export class AppModule { }
