import { Injectable } from "@angular/core";
import { Party } from "./data/party";
import { User } from "./data/user";

@Injectable()
export class PartyFacade {

  constructor() { }

  getGuests(): Array<User> {
    return [
      { id: 1, firstName: 'John', lastName: 'Doe', username: 'jdoe', picture: '/assets/userpics/avatar_01.jpg'},
      { id: 2, firstName: 'Jane', lastName: 'Doe', username: 'jane', picture: '/assets/userpics/avatar_02.jpg'},
      { id: 3, firstName: 'Jack', lastName: 'Doe', username: 'jack'},
      { id: 4, firstName: 'Jill', lastName: 'Doe', username: 'jill'},
    ]
  }

  getParty(): Party {
    return {
      "id": 3,
      "name": "SecondParty",
      "status": {
        "id": 1,
        "statusOption": "Active"
      },
      "comments": "string",
      "addressId": 0,
      "address": {
        "id": 0,
        "address1": "string",
        "address2": "string",
        "district": "string",
        "city": "string",
        "postalCode": "string",
        "country": "Portugal"
      },
      "addressName": "",
      "partyTypeId": 3,
      "partyType": {
        "id": 0,
        "partyName": "Festival"
      },
      "dateBegin": new Date()
    };
  }
}
