import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { 
  }

  getPeople(searchCriteria: string) : Observable<Person[]> {
    let httpParams: HttpParams;

    if (searchCriteria) {
      httpParams = new HttpParams().set('filterBy', searchCriteria);
    }

    return this.http.get<Person[]>("/api/people", { params: httpParams});
  }
}
  