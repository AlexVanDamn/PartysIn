import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Party } from 'src/app/party/data/party';
import { HomeFacade } from '../home.facade';

@Component({
  selector: 'pi-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  parties$ : Observable<Array<Party>>;

  constructor( private facade: HomeFacade ) {
    this.parties$ = this.facade.getPartyTeaserList();
  }

  ngOnInit(): void {
  }

}
