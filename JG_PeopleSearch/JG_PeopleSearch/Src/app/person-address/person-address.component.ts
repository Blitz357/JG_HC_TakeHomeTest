import { Component, Input } from '@angular/core';
import { PersonAddress } from '../models/person-address';

@Component({
  selector: 'person-address',
  templateUrl: './person-address.component.html',
  styleUrls: ['./person-address.component.css']
})
export class PersonAddressComponent{

  @Input() address : PersonAddress;
  
  constructor() { }

}
