import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Party } from '../data/party';
import { User } from '../data/user';
import { PartyFacade } from '../party.facade';

@Component({
  selector: 'app-party-page',
  templateUrl: './party-page.component.html',
  styleUrls: ['./party-page.component.scss']
})
export class PartyPageComponent implements OnInit {

  constructor( private facade: PartyFacade) { }

  party$ = this.facade.getParty() as Observable<Party>;
  guests = this.facade.getGuests() as Array<User>;

  ngOnInit(): void {
  }

}
