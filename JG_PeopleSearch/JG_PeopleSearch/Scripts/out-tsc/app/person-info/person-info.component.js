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
var PersonInfoComponent = /** @class */ (function () {
    function PersonInfoComponent() {
    }
    PersonInfoComponent.prototype.getFullName = function () {
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
    PersonInfoComponent.prototype.getAge = function () {
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
    PersonInfoComponent.prototype.getInterest = function () {
        if (!this.person.Interests) {
            return '';
        }
        return this.person.Interests;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PersonInfoComponent.prototype, "person", void 0);
    PersonInfoComponent = __decorate([
        Component({
            selector: 'person-info',
            templateUrl: './person-info.component.html',
            styleUrls: ['./person-info.component.css']
        })
    ], PersonInfoComponent);
    return PersonInfoComponent;
}());
export { PersonInfoComponent };
//# sourceMappingURL=person-info.component.js.map