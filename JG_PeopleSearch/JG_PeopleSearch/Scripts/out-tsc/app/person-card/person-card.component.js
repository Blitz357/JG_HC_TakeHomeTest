var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var PersonCardComponent = /** @class */ (function () {
    function PersonCardComponent() {
    }
    //constructor() { }
    PersonCardComponent.prototype.getFullName = function () {
        if (this.person.FirstName && this.person.LastName) {
            return this.person.FirstName + " " + this.person.LastName;
        }
        else if (this.person.FirstName) {
            return this.person.FirstName;
        }
        else if (this.person.LastName) {
            return this.person.LastName;
        }
        else {
            return 'Unknown';
        }
    };
    PersonCardComponent.prototype.getAge = function () {
        if (!this.person.DateOfBirth) {
            return 0;
        }
        var today = new Date();
        var dateOfBirth = new Date(this.person.DateOfBirth);
        var age = today.getFullYear() - dateOfBirth.getFullYear();
        var m = today.getMonth() - dateOfBirth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) {
            age--;
        }
        return age;
    };
    PersonCardComponent.prototype.getInterest = function () {
        if (!this.person.Interests) {
            return '';
        }
        return this.person.Interests;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PersonCardComponent.prototype, "person", void 0);
    PersonCardComponent = __decorate([
        Component({
            selector: 'person-card',
            templateUrl: './person-card.component.html',
            styleUrls: ['./person-card.component.css']
        })
    ], PersonCardComponent);
    return PersonCardComponent;
}());
export { PersonCardComponent };
//# sourceMappingURL=person-card.component.js.map