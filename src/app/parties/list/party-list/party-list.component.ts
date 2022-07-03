import { Component, OnInit } from '@angular/core';
import { map, take, Observable } from 'rxjs';
import { PartyApiService } from 'src/app/party-api.service';
import { Party, PartyType, Status } from '../../data/party';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'pi-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.scss']
})
export class PartyListComponent implements OnInit {

  partyList$!: Observable<Party[]>;
  partyTypesList$!: Observable<PartyType[]>;
  // partyTypeList: Array<PartyType> = [];

  // Map to display data accociated with foreign keys
  partyTypesMap:Map<number, string> = new Map();

  constructor(
    private service: PartyApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.partyList$ = this.service.getPartiesList();
    this.partyTypesList$ = this.service.getPartyTypesList();
    this.refreshPartyTypesMap();
  }

  refreshPartyTypesMap(): void {

    this.partyTypesList$.pipe(
      take(1),
      map((type:PartyType[]) => type.map( (t) => {
        this.partyTypesMap.set(t.id, t.partyName)
      }))
    ).subscribe();

  }

}

