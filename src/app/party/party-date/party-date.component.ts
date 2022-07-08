import { Component, HostBinding, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'pi-party-date',
  template: `
      <span class="pi-cmp__label">When</span>
      <ng-container *ngIf="date; else noDate">
        <h2 class="mat-h2">{{dateFormatted}}<small>{{dateFormattedYear}}</small></h2>
        <span class="mat-caption">begin at {{ dateTimeFormatted }} o'clock</span>
      </ng-container>

      <ng-template #noDate>
        <h2 class="mat-h2 placeholder">No date</h2>
      </ng-template>
  `,
  styleUrls: ['./party-date.component.scss']
})

export class PartyDateComponent implements OnInit {
  @HostBinding('class.pi-party-date') hostClass = true;

  _date? : moment.Moment;
  @Input() date? : Date;

  dateFormatted :any;
  dateFormattedYear :any;
  dateTimeFormatted :any;

  constructor() { }

  ngOnInit(): void {
    if(!this.date){
      return
    }

    this._date = moment(this.date);
    this.dateFormatted = this._date.format('dddd, Do MMMM');
    this.dateFormattedYear = this._date.format('YYYY');
    this.dateTimeFormatted = this._date.format('HH:mm');
  }
}
