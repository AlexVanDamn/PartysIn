import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveComponentModule } from '@ngrx/component';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './home-page.component';
import { HomeFacade } from '../home.facade';
import { MatCardModule } from '@angular/material/card';
import { PartyTeaserListModule } from '../../shared/ui/party-teaser-list/party-teaser-list.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,

    MatCardModule,
    MatIconModule,
    PartyTeaserListModule,
  ],
  declarations: [
    HomePageComponent,
  ],
  exports: [
    HomePageComponent
  ],
  providers: [
    HomeFacade
  ],
})

export class HomePageModule { }
