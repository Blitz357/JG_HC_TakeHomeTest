import { PeopleService } from './people.service';
import * as Rx from 'rxjs';
describe('PeopleService', function () {
    var peopleService;
    var http;
    beforeEach(function () {
        http = jasmine.createSpyObj('http', ['get']);
        peopleService = new PeopleService(http);
    });
    describe('Get People', function () {
        it('sets the expected url', function () {
            var observable = new Rx.ReplaySubject();
            http.get.and.callFake(function (url, params) {
                expect(url).toBe("/api/people");
                return observable;
            });
            var something = peopleService.getPeople('');
            expect(something).toBe(observable);
        });
        it('should pass a filterby param if search criteria defined', function () {
            var expectedFilter = 'bob';
            var observable = new Rx.ReplaySubject();
            http.get.and.callFake(function (url, params) {
                var filterValue = params.params.get('filterBy');
                expect(filterValue).toBe(expectedFilter);
                return observable;
            });
            var something = peopleService.getPeople(expectedFilter);
            expect(something).toBe(observable);
        });
        it('should not send a query param if no filter defined', function () {
            var observable = new Rx.ReplaySubject();
            http.get.and.callFake(function (url, params) {
                expect(params.params).toBeUndefined();
                return observable;
            });
            var something = peopleService.getPeople('');
            expect(something).toBe(observable);
        });
    });
});
//# sourceMappingURL=people.service.spec.js.map