"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var project_service_1 = require("./project.service");
describe('ProjectService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(project_service_1.ProjectService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=project.service.spec.js.map