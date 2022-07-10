import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Party, Status } from './party/data/party';


@Injectable({
  providedIn: 'root'
})


export class PartyApiService {

  readonly partyAPIUrl = 'https://localhost:7005/api';

  constructor(private http:HttpClient) { }

  getPartiesList(): Observable<Party[]> {
    return this.http.get<Party[]>(this.partyAPIUrl + '/parties');
  }

  getParty(id:number|string): Observable<Party> {
    return this.http.get<Party>(this.partyAPIUrl + `/parties/${id}`);
  }

  addParty(data: Party): Observable<Party> {
    return this.http.post<Party>(this.partyAPIUrl + '/parties', data);
  }

  updateParty(id:number|string, data:Party): Observable<Party> {
    return this.http.put<Party>(this.partyAPIUrl + `/parties/${id}`, data);
  }

  deleteParty(id:number|string): Observable<Party> {
    return this.http.delete<Party>(this.partyAPIUrl + `/parties/${id}`);
  }


  // Status

  getStatusList(): Observable<Status[]> {
    return this.http.get<Status[]>(this.partyAPIUrl + '/status');
  }

  addStatus(data: Status): Observable<Status> {
    return this.http.post<Status>(this.partyAPIUrl + '/status', data);
  }

  updateStatus(id:number|string, data:Status): Observable<Status> {
    return this.http.put<Status>(this.partyAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string): Observable<Status> {
    return this.http.delete<Status>(this.partyAPIUrl + `/status/${id}`);
  }


}
