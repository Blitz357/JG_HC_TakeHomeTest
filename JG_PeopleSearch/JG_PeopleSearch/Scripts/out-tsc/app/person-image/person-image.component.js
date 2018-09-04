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
import { HttpClient } from '@angular/common/http';
var PersonImageComponent = /** @class */ (function () {
    function PersonImageComponent(http) {
        this.http = http;
        this.imageSrc = '../Src/assets/placeholder.png';
    }
    PersonImageComponent.prototype.ngAfterViewInit = function () {
        this.fetchImage();
    };
    PersonImageComponent.prototype.fetchImage = function () {
        var _this = this;
        var url = "api/peopleimage/" + this.id.toString();
        this.http.get(url).subscribe(function (base64String) {
            _this.imageSrc = base64String;
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PersonImageComponent.prototype, "id", void 0);
    PersonImageComponent = __decorate([
        Component({
            selector: 'person-image',
            templateUrl: './person-image.component.html',
            styleUrls: ['./person-image.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], PersonImageComponent);
    return PersonImageComponent;
}());
export { PersonImageComponent };
//# sourceMappingURL=person-image.component.js.map