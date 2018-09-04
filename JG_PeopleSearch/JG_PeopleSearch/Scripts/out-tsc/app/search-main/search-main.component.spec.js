import * as Rx from 'rxjs';
import { SearchMainComponent } from './search-main.component';
describe('SearchMainComponent', function () {
    var component;
    var peopleService;
    beforeEach(function () {
        peopleService = jasmine.createSpyObj('peopleService', ['getPeople']);
        component = new SearchMainComponent(peopleService);
    });
    describe('Get People', function () {
        it('sets people field on successful get', function () {
            var expectedPeople = [];
            var observable = new Rx.ReplaySubject();
            peopleService.getPeople.and.returnValue(observable);
            component.getPeople('');
            observable.next(expectedPeople);
            expect(component.people).toBe(expectedPeople);
        });
        it('passes search criteria to service', function () {
            var searchCriteria = 'bob';
            var observable = new Rx.ReplaySubject();
            var serviceCalled = false;
            peopleService.getPeople.and.callFake(function (inCriteria) {
                expect(inCriteria).toBe(searchCriteria);
                serviceCalled = true;
                return observable;
            });
            component.getPeople(searchCriteria);
            observable.next([]);
            expect(serviceCalled).toBe(true);
        });
    });
});
//# sourceMappingURL=search-main.component.spec.js.map