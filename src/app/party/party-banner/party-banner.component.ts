import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pi-party-banner',
  templateUrl: './party-banner.component.html',
  styleUrls: ['./party-banner.component.scss']
})
export class PartyBannerComponent implements OnInit {
  @HostBinding('class') readonly class = 'pi-party-banner';

  @Input() banner? : string;

  constructor() { }


  ngOnInit(): void {
  }

}
