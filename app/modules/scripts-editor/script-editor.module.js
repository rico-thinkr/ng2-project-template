System.register(['../../utils/module-extensions', './script.component', './script.routing'], function(exports_1, context_1) {
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
    var module_extensions_1, script_component_1, script_routing_1;
    var ScriptModule;
    return {
        setters:[
            function (module_extensions_1_1) {
                module_extensions_1 = module_extensions_1_1;
            },
            function (script_component_1_1) {
                script_component_1 = script_component_1_1;
            },
            function (script_routing_1_1) {
                script_routing_1 = script_routing_1_1;
            }],
        execute: function() {
            ScriptModule = (function () {
                function ScriptModule() {
                }
                ScriptModule = __decorate([
                    module_extensions_1.NgModule({
                        imports: [module_extensions_1.CommonModule, script_routing_1.routing],
                        declarations: [script_component_1.Script_Editor_Component],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], ScriptModule);
                return ScriptModule;
            }());
            exports_1("default", ScriptModule);
        }
    }
});
