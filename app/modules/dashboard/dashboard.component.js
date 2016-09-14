System.register(['../../utils/component-extensions', '../../ui-elements/navbar/nav.component', '../../ui-elements/breadbrumb/path.component'], function(exports_1, context_1) {
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
    var component_extensions_1, nav_component_1, path_component_1;
    var Dashboard_Component;
    return {
        setters:[
            function (component_extensions_1_1) {
                component_extensions_1 = component_extensions_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (path_component_1_1) {
                path_component_1 = path_component_1_1;
            }],
        execute: function() {
            Dashboard_Component = (function () {
                function Dashboard_Component() {
                }
                Dashboard_Component.prototype.ngOnInit = function () {
                    this.title = "Dashboard";
                };
                Dashboard_Component = __decorate([
                    component_extensions_1.NgComponent({
                        selector: "dashboard",
                        template: "<!--\u5BFC\u822A-->\n            <navbar></navbar>\n            <div id=\"page-wrapper\">\n                <breadcrumb title=\"{{title}}\"></breadcrumb>\n                <div class=\"wrapper wrapper-content\">\n                    <div class=\"row\">\n                        <router-outlet></router-outlet>\n                    </div>\n                </div>\n            </div>\n            ",
                        directives: [nav_component_1.Nav_Component, path_component_1.breadcrumb_Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Dashboard_Component);
                return Dashboard_Component;
            }());
            exports_1("Dashboard_Component", Dashboard_Component);
        }
    }
});
