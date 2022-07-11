import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Party } from "../party/data/party";
import { PartyApiService } from "../party/party-api.service";



@Injectable()
export class HomeFacade {

  constructor( private service: PartyApiService) { }

  getPartyTeaserList(): Observable<Party[]> {
    return this.service.getPartiesList();
  }
}
