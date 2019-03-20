"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var project_service_1 = require("../shared/project/project.service");
var TableListComponent = /** @class */ (function () {
    function TableListComponent(projectService) {
        this.projectService = projectService;
    }
    TableListComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    TableListComponent.prototype.reloadData = function () {
        this.projects = this.projectService.getAll();
    };
    TableListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-table-list',
            templateUrl: './table-list.component.html',
            styleUrls: ['./table-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [project_service_1.ProjectService])
    ], TableListComponent);
    return TableListComponent;
}());
exports.TableListComponent = TableListComponent;
//# sourceMappingURL=table-list.component.js.map