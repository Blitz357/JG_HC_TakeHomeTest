var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service';
var SearchMainComponent = /** @class */ (function () {
    function SearchMainComponent(peopleServcie) {
        this.peopleServcie = peopleServcie;
    }
    SearchMainComponent.prototype.getPeople = function (searchCriteria) {
        var _this = this;
        this.peopleServcie.getPeople(searchCriteria).subscribe(function (listOfPerson) {
            _this.people = listOfPerson;
        });
    };
    SearchMainComponent = __decorate([
        Component({
            selector: 'app-search-main',
            templateUrl: './search-main.component.html',
            styleUrls: ['./search-main.component.css']
        }),
        __metadata("design:paramtypes", [PeopleService])
    ], SearchMainComponent);
    return SearchMainComponent;
}());
export { SearchMainComponent };
//# sourceMappingURL=search-main.component.js.map