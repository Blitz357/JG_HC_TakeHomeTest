import { Component, Input } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent {

    @Input() person: Person;

    getFullName(): string {
        if (this.person.FirstName && this.person.LastName) {
            return `${this.person.FirstName} ${this.person.LastName}`;
        } else if (this.person.FirstName) {
            return this.person.FirstName;
        } else if (this.person.LastName) {
            return this.person.LastName;
        } else {
            return 'Unknown';
        }
    }

    getAge(): number {

        if (!this.person.DateOfBirth) {
            return 0;
        }

        let today = new Date();
        let dateOfBirth = new Date(this.person.DateOfBirth);
        let age = today.getFullYear() - dateOfBirth.getFullYear();
        let month = today.getMonth() - dateOfBirth.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
            age--;
        }
        return age;  
    }  

    getInterest(): string {
        if (!this.person.Interests){
            return '';
        }

        return this.person.Interests;  
    }
}
  