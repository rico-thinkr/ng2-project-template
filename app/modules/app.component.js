System.register(['../utils/component-extensions'], function(exports_1, context_1) {
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
    var component_extensions_1;
    var App_Component;
    return {
        setters:[
            function (component_extensions_1_1) {
                component_extensions_1 = component_extensions_1_1;
            }],
        execute: function() {
            App_Component = (function () {
                function App_Component() {
                }
                App_Component = __decorate([
                    component_extensions_1.NgComponent({
                        selector: 'app',
                        template: 'hello world'
                    }), 
                    __metadata('design:paramtypes', [])
                ], App_Component);
                return App_Component;
            }());
            exports_1("App_Component", App_Component);
        }
    }
});
