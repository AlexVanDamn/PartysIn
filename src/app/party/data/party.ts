export interface Party {
  id: number;
  name: string;
  status: Status;
  partyTypeId: number;
  partyType: PartyType;
  comments: string;
  dateBegin: Date;
  addressId: number;
  address: PartyAddress;
  addressName: string;
}

export interface PartyType {
  id: number;
  partyName: string;
}

export interface Status {
  id: number;
  statusOption: string;
}

export interface PartyAddress {
  id: number;
  address1 : string;
  address2 : string;
  city : string;
  district : string;
  postalCode : string;
  country : string;
}
