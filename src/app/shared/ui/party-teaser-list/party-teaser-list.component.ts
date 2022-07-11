import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Party } from 'src/app/party/data/party';

@Component({
  selector: 'pi-party-teaser-list',
  templateUrl: './party-teaser-list.component.html',
  styleUrls: ['./party-teaser-list.component.scss']
})
export class PartyTeaserListComponent implements OnInit {
  @HostBinding('class') class = 'pi-party-teaser-list';

  @Input() parties: Array<Party>|null = [];

  constructor() { }

  ngOnInit(): void {
    console.log('PartyTeaserListComponent.ngOnInit()');
    console.log('parties:', this.parties);
  }

}
