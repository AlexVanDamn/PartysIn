export interface Party {
  id: number;
  name: string;
  status: Status;
  partyTypeId: number;
  partyType: PartyType;
  comments: string;
}

export interface PartyType {
  id: number;
  partyName: string;
}

export interface Status {
  id: number;
  statusOption: string;
}
