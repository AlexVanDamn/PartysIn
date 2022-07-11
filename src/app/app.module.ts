import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PartyApiService } from './party/party-api.service';

import { PartyPageModule } from './party/party-page/party-page.module';
import { PartyTeaserListModule } from './shared/ui/party-teaser-list/party-teaser-list.module';
import { HomePageModule } from './home/home-page/home-page.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    PartyPageModule,
    PartyTeaserListModule,
    HomePageModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [PartyApiService],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
