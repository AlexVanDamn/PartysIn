import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Party } from '../data/party';
import { User } from '../data/user';
import { PartyFacade } from '../party.facade';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'pi-party-page',
  templateUrl: './party-page.component.html',
  styleUrls: ['./party-page.component.scss']
})
export class PartyPageComponent implements OnInit {
  @HostBinding('class') class = 'pi-party-page';
  constructor(
    private facade: PartyFacade,
    private route: ActivatedRoute,
    ) { }

  party$? : Observable<Party>;
  guests = this.facade.getGuests() as Array<User>;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.party$ = this.facade.getParty(params['id'])
    });

  }

}
