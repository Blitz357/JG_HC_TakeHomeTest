import { TestBed, inject } from '@angular/core/testing';
import { PeopleServiceService } from './people-service.service';
describe('PeopleServiceService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PeopleServiceService]
        });
    });
    it('should be created', inject([PeopleServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=people-service.service.spec.js.map