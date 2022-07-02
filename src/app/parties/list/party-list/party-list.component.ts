import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PartyApiService } from 'src/app/party-api.service';
import { Party, PartyType, Status } from '../../data/party';

@Component({
  selector: 'pi-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.scss']
})
export class PartyListComponent implements OnInit {

  partyList$!: Observable<Party[]>;
  partyTypesList$!: Observable<PartyType[]>;
  partyTypeList: Array<PartyType> = [];

  // Map to display data accociated with foreign keys
  partyTypesMap:Map<number, string> = new Map();

  constructor(private service: PartyApiService) { }

  ngOnInit(): void {
    this.partyList$ = this.service.getPartiesList();
  }

}
