System.register(['./utils/module-extensions', './modules/app.component'], function(exports_1, context_1) {
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
    var Modules, app_component_1;
    var App_Module;
    return {
        setters:[
            function (Modules_1) {
                Modules = Modules_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            // import {routing} from './app.routing';
            App_Module = (function () {
                function App_Module() {
                }
                App_Module = __decorate([
                    Modules.NgModule({
                        imports: [Modules.BrowserModule],
                        declarations: [app_component_1.App_Component],
                        bootstrap: [app_component_1.App_Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App_Module);
                return App_Module;
            }());
            exports_1("App_Module", App_Module);
        }
    }
});
