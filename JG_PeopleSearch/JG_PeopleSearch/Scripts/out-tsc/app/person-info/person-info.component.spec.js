import { PersonInfoComponent } from './person-info.component';
describe('PersonInfoComponent', function () {
    var component;
    var person;
    beforeEach(function () {
        person = jasmine.createSpyObj('person', ['FirstName', 'LastName', 'DateOfBirth', 'Interests']);
        component = new PersonInfoComponent();
        component.person = person;
    });
    describe('Full Name', function () {
        it('combines first then last if both are available', function () {
            person.FirstName = 'bob';
            person.LastName = 'smith';
            var fullName = component.getFullName();
            expect(fullName).toBe(person.FirstName + ' ' + person.LastName);
        });
        it('only displays first name if only first name available', function () {
            person.FirstName = 'bob';
            person.LastName = '';
            var fullName = component.getFullName();
            expect(fullName).toBe(person.FirstName);
        });
        it('only displays last name if only last name available', function () {
            person.FirstName = '';
            person.LastName = 'smtih';
            var fullName = component.getFullName();
            expect(fullName).toBe(person.LastName);
        });
        it('displays unknown if neither first or last are available', function () {
            person.FirstName = '';
            person.LastName = '';
            var actual = component.getFullName();
            expect(actual).toBe('Unknown');
        });
    });
    describe('Age', function () {
        it('convert DOB to age correctly', function () {
            var expected = 26;
            var date = new Date();
            date.setFullYear(date.getFullYear() - expected);
            person.DateOfBirth = date.toISOString();
            var actual = component.getAge();
            expect(actual).toBe(expected);
        });
        it('returns zero if DOB falsy', function () {
            person.DateOfBirth = '';
            var actual = component.getAge();
            expect(actual).toBe(0);
        });
    });
    describe('Interest', function () {
        it('returns empty string if interest is falsey', function () {
            person.Interests = null;
            var actual = component.getInterest();
            expect(actual).toBe('');
        });
        it('returns interest from person', function () {
            person.Interests = "some interest";
            var actual = component.getInterest();
            expect(actual).toBe(person.Interests);
        });
    });
});
//# sourceMappingURL=person-info.component.spec.js.map