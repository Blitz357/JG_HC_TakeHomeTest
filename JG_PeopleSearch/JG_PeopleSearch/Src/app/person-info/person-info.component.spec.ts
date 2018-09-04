import { PersonInfoComponent } from './person-info.component';
import { Person } from '../models/person';

describe('PersonInfoComponent', () => {
   let component: PersonInfoComponent;
   let person: Person;

   beforeEach(() => {
       person = jasmine.createSpyObj('person', ['FirstName', 'LastName', 'DateOfBirth', 'Interests']);
       component = new PersonInfoComponent();
       component.person = person;
   });

   describe('Full Name', () => {
         
       it('combines first then last if both are available', () => {
           person.FirstName = 'bob';
           person.LastName = 'smith';
           
           const fullName = component.getFullName();

           expect(fullName).toBe(person.FirstName + ' ' + person.LastName);
       });

       it('only displays first name if only first name available', () => {
           person.FirstName = 'bob';
           person.LastName = '';

           const fullName = component.getFullName();

           expect(fullName).toBe(person.FirstName);
       });

       it('only displays last name if only last name available', () => {
           person.FirstName = '';  
           person.LastName = 'smtih';

           const fullName = component.getFullName();

           expect(fullName).toBe(person.LastName);
       });

       it('displays unknown if neither first or last are available', () => {
           person.FirstName = '';
           person.LastName = '';

           const actual = component.getFullName();

           expect(actual).toBe('Unknown');
       });
   });

   describe('Age', () => {

       it('convert DOB to age correctly', () => {
           let expected = 26;
           let date = new Date();
           date.setFullYear(date.getFullYear() - expected);
           person.DateOfBirth = date.toISOString();
             
           const actual = component.getAge();
             
           expect(actual).toBe(expected);
       });

       it('returns zero if DOB falsy', () => {
           person.DateOfBirth = '';

           const actual = component.getAge();

           expect(actual).toBe(0);
       });
   });
   
   describe('Interest', ()=>{

       it('returns empty string if interest is falsey', ()=>{
           person.Interests = null;

           const actual = component.getInterest();

           expect(actual).toBe('');
       });

       it('returns interest from person', ()=>{
           person.Interests = "some interest";

           const actual = component.getInterest();

           expect(actual).toBe(person.Interests);
       });
   });   
});
  