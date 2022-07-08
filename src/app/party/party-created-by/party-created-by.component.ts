import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { User } from '../data/user';

@Component({
  selector: 'pi-party-created-by',
  templateUrl: './party-created-by.component.html',
  styleUrls: ['./party-created-by.component.scss']
})
export class PartyCreatedByComponent implements OnInit {
  @HostBinding('class') readonly class = 'pi-party-created-by';

  constructor() { }

  @Input() user!: User;

  ngOnInit(): void {
  }

}
