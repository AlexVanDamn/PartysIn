import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';

import { PartyPageComponent } from './party/party-page/party-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'party/:id', component: PartyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { }

}
