import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'pi-party-join-btn',
  templateUrl: './party-join-btn.component.html',
  styleUrls: ['./party-join-btn.component.scss']
})
export class PartyJoinBtnComponent implements OnInit {
  @HostBinding('class') class = 'pi-party-join-btn';
  constructor() { }

  ngOnInit(): void {
  }

}
