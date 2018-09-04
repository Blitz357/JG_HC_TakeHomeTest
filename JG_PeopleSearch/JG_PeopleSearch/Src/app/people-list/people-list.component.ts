import { Component, Input } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  @Input() people: Person[];
  
  constructor() { }
}
