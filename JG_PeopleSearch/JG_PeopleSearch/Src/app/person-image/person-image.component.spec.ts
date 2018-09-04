import { PersonImageComponent } from './person-image.component';
import * as Rx from 'rxjs';

describe('PersonImageComponent', () => {
    let component: PersonImageComponent;
    let http;

    beforeEach(()=>{
        http = jasmine.createSpyObj('http', ['get']);
        component = new PersonImageComponent(http);
    });

    describe('Fetch Image', () => {

        it('uses the correct url with id', ()=>{
            let id = 4;
            component.id = id;
            http.get.and.returnValue(new Rx.ReplaySubject<string>());

            component.fetchImage();
      
            expect(http.get).toHaveBeenCalledWith('api/peopleimage/' + id.toString());
        });

        it('sets imagesrc from http get', ()=>{
            let imagesource = 'aaa';
            component.id = 5;
            
            let observable = new Rx.ReplaySubject<string>();
            http.get.and.returnValue(observable);

            component.fetchImage();
            observable.next(imagesource);
      
            expect(component.imageSrc).toBe(imagesource);
        });
    });
});
