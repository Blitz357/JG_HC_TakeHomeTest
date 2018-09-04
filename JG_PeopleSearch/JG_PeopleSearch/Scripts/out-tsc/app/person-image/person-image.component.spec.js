import { PersonImageComponent } from './person-image.component';
import * as Rx from 'rxjs';
describe('PersonImageComponent', function () {
    var component;
    var http;
    beforeEach(function () {
        http = jasmine.createSpyObj('http', ['get']);
        component = new PersonImageComponent(http);
    });
    describe('Fetch Image', function () {
        it('uses the correct url with id', function () {
            var id = 4;
            component.id = id;
            http.get.and.returnValue(new Rx.ReplaySubject());
            component.fetchImage();
            expect(http.get).toHaveBeenCalledWith('api/peopleimage/' + id.toString());
        });
        it('sets imagesrc from http get', function () {
            var imagesource = 'aaa';
            component.id = 5;
            var observable = new Rx.ReplaySubject();
            http.get.and.returnValue(observable);
            component.fetchImage();
            observable.next(imagesource);
            expect(component.imageSrc).toBe(imagesource);
        });
    });
});
//# sourceMappingURL=person-image.component.spec.js.map