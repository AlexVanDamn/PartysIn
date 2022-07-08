import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { User } from '../data/user';


@Component({
  selector: 'pi-party-guests',
  templateUrl: './party-guests.component.html',
  styleUrls: ['./party-guests.component.scss']
})

export class PartyGuestsComponent implements OnInit {
  @HostBinding('class') readonly class = 'pi-party-guests';

  @Input() guestCounter: number = 0;
  @Input() guests: Array<User> = []

  constructor() { }

  ngOnInit(): void {
  }

}
