System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var breadcrumb_Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            breadcrumb_Component = (function () {
                function breadcrumb_Component() {
                }
                breadcrumb_Component.prototype.ngOnInit = function () {
                    console.log(this.title);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], breadcrumb_Component.prototype, "title", void 0);
                breadcrumb_Component = __decorate([
                    core_1.Component({
                        selector: "breadcrumb",
                        template: "<div class=\"row wrapper border-bottom white-bg page-heading\">\n        <div class=\"col-lg-12\">\n            <ol class=\"breadcrumb pull-left\">\n                <li>\n                    <a href=\"/\">Home</a>\n                </li>\n                <li class=\"active\">\n                    <strong>{{title}}</strong>\n                </li>\n            </ol>\n        </div>\n    </div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], breadcrumb_Component);
                return breadcrumb_Component;
            }());
            exports_1("breadcrumb_Component", breadcrumb_Component);
        }
    }
});
