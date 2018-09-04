import { Component } from '@angular/core';
import { Person } from '../models/person';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.component.html',
  styleUrls: ['./search-main.component.css']
})
export class SearchMainComponent {

  constructor(private peopleServcie: PeopleService) { 
  }

  public people : Person[];

  getPeople(searchCriteria: string) : void{
      this.peopleServcie.getPeople(searchCriteria).subscribe(
        (listOfPerson)=> {
          this.people = listOfPerson;
        }
      );
  }
}
