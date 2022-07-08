import { Component, Input, OnInit } from '@angular/core';
import { PartyAddress } from '../data/party';

@Component({
  selector: 'pi-party-address',
  template: `
   <span class="pi-cmp__label">Where</span>
    <h3 class="mat-h3">
      {{ name }}
    </h3>
    <span class="mat-caption">{{ formattedAddress }}</span>
  `,
  styleUrls: ['./party-address.component.scss']
})
export class PartyAddressComponent implements OnInit {

  @Input() name!: string;
  @Input() address!: PartyAddress;

  get formattedAddress(): string {
    return this.address.address1 + ' ' + this.address.address2 + ', ' + this.address.city + ', ' + this.address.district + ', ' + this.address.postalCode + ', ' + this.address.country;
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.address);
  }

}
