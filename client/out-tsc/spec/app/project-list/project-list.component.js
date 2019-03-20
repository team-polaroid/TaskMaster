"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var project_service_1 = require("../shared/project/project.service");
var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    ProjectListComponent.prototype.reloadData = function () {
        var _this = this;
        this.projectService.getAll().subscribe(function (data) {
            _this.projects = data;
        });
    };
    ProjectListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-project-list',
            templateUrl: './project-list.component.html',
            styleUrls: ['./project-list.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [project_service_1.ProjectService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map