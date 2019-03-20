"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map