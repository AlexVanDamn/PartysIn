import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pi',
  template: `
  <h1 class="mat-display-1">
    <ng-container *ngIf="title.length; else placeholder">
      {{ title }}
    </ng-container>
    <ng-template #placeholder>
      <span class="placeholder">{{ placeholderText }}</span>
    </ng-template>
  </h1>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class PartyTitleComponent {
  @HostBinding('class.pi-party-title') hostClass = true;

  placeholderText = 'Party Title';
  @Input() title: string;

  constructor() {
    this.title = '';
  }
}
