export interface Party {
  id: number;
  name: string;
  status: Status;
  partyType: PartyType;
}

export interface PartyType {
  id: number;
  name: string;
}

export interface Status {
  id: number;
  statusOption: string;
}
