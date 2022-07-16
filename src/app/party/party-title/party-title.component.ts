import { Component, HostBinding, Input } from "@angular/core";


@Component({
  selector: 'pi-party-title',
  templateUrl: './party-title.component.html',
  styleUrls: ['./party-title.component.scss']
})
export class PartyTitleComponent {
  @HostBinding('class.pi-party-title') hostClass = true;

  placeholderText = 'Party Title';

  @Input() title: string = '';

}
