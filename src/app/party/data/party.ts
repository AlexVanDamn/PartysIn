import { User } from "./user";

export interface Party {
  id: number;
  name: string;

  status: Status;

  description: string;

  dateBegin: Date;
  dateEnd: Date;

  addressId: number;
  address: PartyAddress;

  createdBy: User;
}


export interface Status {
  id: number;
  statusOption: string;
}

export interface PartyAddress {
  id: number;
  name : string;
  street : string;
  streetNo : string;
  city : string;
  district : string;
  postalCode : string;
  country : string;
}
