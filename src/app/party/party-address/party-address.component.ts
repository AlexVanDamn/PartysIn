import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { PartyAddress } from '../data/party';

@Component({
  selector: 'pi-party-address',
  template: `
   <span class="pi-cmp__label">Where</span>
    <h2 class="mat-h2">
      {{ address.name}}
    </h2>
    <span class="mat-body-1">{{ formattedAddress }}</span>
  `,
  styleUrls: ['./party-address.component.scss']
})
export class PartyAddressComponent implements OnInit {
  @HostBinding('class') readonly class = 'pi-party-address';
  @Input() address!: PartyAddress;

  get formattedAddress(): string {
    return this.address.street + ' ' + this.address.streetNo + ', ' + this.address.city + ', ' + this.address.district + ', ' + this.address.postalCode;
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.address);
  }

}
