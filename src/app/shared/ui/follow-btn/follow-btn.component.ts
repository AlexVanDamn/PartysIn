import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'pi-follow-btn',
  templateUrl: './follow-btn.component.html',
  styleUrls: ['./follow-btn.component.scss']
})
export class FollowBtnComponent implements OnInit {
 @HostBinding('class') readonly class = 'pi-follow-btn';
  constructor() { }

  ngOnInit(): void {
  }

}
