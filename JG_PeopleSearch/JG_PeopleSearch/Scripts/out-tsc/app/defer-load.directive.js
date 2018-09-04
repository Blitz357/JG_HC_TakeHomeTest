var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Output, PLATFORM_ID } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var DeferLoadDirective = /** @class */ (function () {
    function DeferLoadDirective(_element, _zone, platformId) {
        var _this = this;
        this._element = _element;
        this._zone = _zone;
        this.platformId = platformId;
        this.preRender = true;
        this.deferLoad = new EventEmitter();
        this.checkForIntersection = function (entries) {
            entries.forEach(function (entry) {
                if (_this.checkIfIntersecting(entry)) {
                    _this.load();
                    if (_this._intersectionObserver && _this._element.nativeElement) {
                        _this._intersectionObserver.unobserve((_this._element.nativeElement));
                    }
                }
            });
        };
        this.onScroll = function () {
            if (_this.isVisible()) {
                _this._zone.run(function () { return _this.load(); });
            }
        };
    }
    DeferLoadDirective.prototype.ngAfterViewInit = function () {
        if (isPlatformBrowser(this.platformId)) {
            if (this.hasCompatibleBrowser()) {
                this.registerIntersectionObserver();
                if (this._intersectionObserver && this._element.nativeElement) {
                    this._intersectionObserver.observe((this._element.nativeElement));
                }
            }
            else {
                this.addScrollListeners();
            }
        }
        else {
            if (this.preRender) {
                this.load();
            }
        }
    };
    DeferLoadDirective.prototype.hasCompatibleBrowser = function () {
        var hasIntersectionObserver = 'IntersectionObserver' in window;
        var userAgent = window.navigator.userAgent;
        var matches = userAgent.match(/Edge\/(\d*)\./i);
        var isEdge = !!matches && matches.length > 1;
        var isEdgeVersion16OrBetter = isEdge && (!!matches && parseInt(matches[1], 10) > 15);
        return hasIntersectionObserver && (!isEdge || isEdgeVersion16OrBetter);
    };
    DeferLoadDirective.prototype.ngOnDestroy = function () {
        this.removeListeners();
    };
    DeferLoadDirective.prototype.registerIntersectionObserver = function () {
        var _this = this;
        if (!!this._intersectionObserver) {
            return;
        }
        this._intersectionObserver = new IntersectionObserver(function (entries) {
            _this.checkForIntersection(entries);
        }, {});
    };
    DeferLoadDirective.prototype.checkIfIntersecting = function (entry) {
        // For Samsung native browser, IO has been partially implemented where by the
        // callback fires, but entry object is empty. We will check manually.
        if (entry && Object.keys(entry).length) {
            return entry.isIntersecting && entry.target === this._element.nativeElement;
        }
        return this.isVisible();
    };
    DeferLoadDirective.prototype.load = function () {
        this.removeListeners();
        this.deferLoad.emit();
    };
    DeferLoadDirective.prototype.addScrollListeners = function () {
        var _this = this;
        if (this.isVisible()) {
            this.load();
            return;
        }
        this._zone.runOutsideAngular(function () {
            _this._scrollSubscription = fromEvent(window, 'scroll')
                .pipe(debounceTime(50))
                .subscribe(_this.onScroll);
        });
    };
    DeferLoadDirective.prototype.removeListeners = function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
        }
        if (this._intersectionObserver) {
            this._intersectionObserver.disconnect();
        }
    };
    DeferLoadDirective.prototype.isVisible = function () {
        var scrollPosition = this.getScrollPosition();
        var elementOffset = this._element.nativeElement.offsetTop;
        return elementOffset <= scrollPosition;
    };
    DeferLoadDirective.prototype.getScrollPosition = function () {
        // Getting screen size and scroll position for IE
        return (window.scrollY || window.pageYOffset)
            + (document.documentElement.clientHeight || document.body.clientHeight);
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DeferLoadDirective.prototype, "preRender", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DeferLoadDirective.prototype, "deferLoad", void 0);
    DeferLoadDirective = __decorate([
        Directive({
            selector: '[defer-load]'
        }),
        __param(2, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [ElementRef,
            NgZone,
            Object])
    ], DeferLoadDirective);
    return DeferLoadDirective;
}());
export { DeferLoadDirective };
//# sourceMappingURL=defer-load.directive.js.map