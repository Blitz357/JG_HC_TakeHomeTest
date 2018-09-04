import { async, TestBed } from '@angular/core/testing';
import { JgNavBarComponent } from './jg-nav-bar.component';
describe('JgNavBarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [JgNavBarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(JgNavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=jg-nav-bar.component.spec.js.map