import { PeopleService } from './people.service';
import * as Rx from 'rxjs';
import { Person } from '../models/person';

describe('PeopleService', () => {
  let peopleService: PeopleService;
  let http;

  beforeEach(() => {
    http = jasmine.createSpyObj('http', ['get']);
    peopleService = new PeopleService(http);
  });

  describe('Get People', () => {

    it('sets the expected url', () => {
      let observable = new Rx.ReplaySubject<Person[]>();

      http.get.and.callFake((url: string, params: any) =>{
        expect(url).toBe("/api/people");
        return observable;
      });

      let something = peopleService.getPeople('');

      expect(something).toBe(observable);
    });


    it('should pass a filterby param if search criteria defined', () => {
      let expectedFilter = 'bob';
      let observable = new Rx.ReplaySubject<Person[]>();

      http.get.and.callFake((url: string, params: any) =>{
        let filterValue = params.params.get('filterBy');
        expect(filterValue).toBe(expectedFilter);
        
        return observable;
      });

      let something = peopleService.getPeople(expectedFilter);

      expect(something).toBe(observable);
    });

    it('should not send a query param if no filter defined', () => {
      let observable = new Rx.ReplaySubject<Person[]>();

      http.get.and.callFake((url: string, params: any) =>{
        expect(params.params).toBeUndefined();
        return observable;
      });

      let something = peopleService.getPeople('');

      expect(something).toBe(observable);
    });
  });
});
