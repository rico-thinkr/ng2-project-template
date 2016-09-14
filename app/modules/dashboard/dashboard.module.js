System.register(['../../utils/module-extensions', './dashboard.component', './dashboard.routing'], function(exports_1, context_1) {
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
    var Modules, dashboard_component_1, dashboard_routing_1;
    var Dashboard_Module;
    return {
        setters:[
            function (Modules_1) {
                Modules = Modules_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (dashboard_routing_1_1) {
                dashboard_routing_1 = dashboard_routing_1_1;
            }],
        execute: function() {
            Dashboard_Module = (function () {
                function Dashboard_Module() {
                }
                Dashboard_Module = __decorate([
                    Modules.NgModule({
                        imports: [Modules.CommonModule, dashboard_routing_1.routing],
                        declarations: [dashboard_component_1.Dashboard_Component],
                        bootstrap: [dashboard_component_1.Dashboard_Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Dashboard_Module);
                return Dashboard_Module;
            }());
            exports_1("default", Dashboard_Module);
        }
    }
});
