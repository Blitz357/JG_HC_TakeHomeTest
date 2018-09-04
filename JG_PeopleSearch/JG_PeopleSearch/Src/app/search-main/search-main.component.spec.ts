import * as Rx from 'rxjs';
import { SearchMainComponent } from './search-main.component';
import { Person } from '../models/person';

describe('SearchMainComponent', () => {
    let component: SearchMainComponent;
    let peopleService;

    beforeEach(()=>{
        peopleService = jasmine.createSpyObj('peopleService', ['getPeople']);
        component = new SearchMainComponent(peopleService);
    });

    describe('Get People', ()=>{

        it('sets people field on successful get', ()=>{
            let expectedPeople = [];
            let observable = new Rx.ReplaySubject<Person[]>();
            peopleService.getPeople.and.returnValue(observable);

            component.getPeople('');
            observable.next(expectedPeople);

            expect(component.people).toBe(expectedPeople);
        });

        it('passes search criteria to service', ()=>{
            let searchCriteria = 'bob';
            let observable = new Rx.ReplaySubject<Person[]>();
            let serviceCalled = false;

            peopleService.getPeople.and.callFake((inCriteria: string) =>{
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
