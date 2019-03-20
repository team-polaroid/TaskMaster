"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ProjectService = /** @class */ (function () {
    //private baseUrl = 'http://3.16.49.56:8080/api/projects';
    function ProjectService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/projects';
    }
    ProjectService.prototype.getAll = function () {
        console.log('accessing project rest');
        return this.http.get("" + this.baseUrl);
    };
    ProjectService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map