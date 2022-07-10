import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PartyApiService } from "../party-api.service";
import { Party } from "./data/party";
import { User } from "./data/user";



@Injectable()
export class PartyFacade {

  constructor( private service: PartyApiService) { }

  getGuests(): Array<User> {
    return [
      { id: 1, firstname: 'John', lastname: 'Doe', username: 'jdoe', picture: '/assets/userpics/avatar_01.jpg', createdAt: new Date() },
      { id: 2, firstname: 'Jane', lastname: 'Doe', username: 'jane', picture: '/assets/userpics/avatar_02.jpg', createdAt: new Date() },
      { id: 3, firstname: 'Jack', lastname: 'Doe', username: 'jack', createdAt: new Date() },
      { id: 4, firstname: 'Jill', lastname: 'Doe', username: 'jill', createdAt: new Date() },
    ]
  }

  getCreator(): User {
    return {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      username: 'jdoe',
      picture: '/assets/userpics/avatar_01.jpg',
      createdAt: new Date()
    }
  }

  getParty(): Observable<Party> {
    return this.service.getParty(1);
  }
}
