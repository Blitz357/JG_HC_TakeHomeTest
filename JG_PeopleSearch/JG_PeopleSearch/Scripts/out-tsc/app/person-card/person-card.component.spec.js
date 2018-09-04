//import { PersonCardComponent } from './person-card.component';
//import { Person } from '../models/person';
//
//describe('PersonCardComponent', () => {
//    let component: PersonCardComponent;
//    let person: Person;
//
//    beforeEach(() => {
//        person = new Person();
//        component = new PersonCardComponent();
//        component.person = person;
//    });
//
//    describe('Full Name', () => {
//        
//        it('combines first then last if both are available', () => {
//            person.firstName = 'bob';
//            person.lastName = 'smith';
//            
//            const fullName = component.getFullName();
//
//            expect(fullName).toBe(person.firstName + ' ' + person.lastName);
//        });
//
//        it('only displays first name if only first name available', () => {
//            person.firstName = 'bob';
//            person.lastName = '';
//
//            const fullName = component.getFullName();
//
//            expect(fullName).toBe(person.firstName);
//        });
//
//        it('only displays last name if only last name available', () => {
//            person.firstName = '';  
//            person.lastName = 'smtih';
//
//            const fullName = component.getFullName();
//
//            expect(fullName).toBe(person.lastName);
//        });
//
//        it('displays unknown if neither first or last are available', () => {
//            person.firstName = '';
//            person.lastName = '';
//
//            const actual = component.getFullName();
//
//            expect(actual).toBe('Unknown');
//        });
//    });
//
//    describe('Age', () => {
//
//        it('convert DOB to age correctly', () => {
//            let expected = 26;
//            let date = new Date();
//            date.setFullYear(date.getFullYear() - expected);
//            person.dateOfBirth = date.toISOString();
//              
//            const actual = component.getAge();
//              
//            expect(actual).toBe(expected);
//        });
//
//        it('returns zero if DOB falsy', () => {
//            person.dateOfBirth = '';
//
//            const actual = component.getAge();
//
//            expect(actual).toBe(0);
//        });
//    });
//    
//    describe('Interest', ()=>{
//
//        it('returns empty string if interest is falsey', ()=>{
//            person.interests = null;
//
//            const actual = component.getInterest();
//
//            expect(actual).toBe('');
//        });
//
//        it('returns interest from person', ()=>{
//            person.interests = "some interest";
//
//            const actual = component.getInterest();
//
//            expect(actual).toBe(person.interests);
//        });
//    });   
//});
//# sourceMappingURL=person-card.component.spec.js.map