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
    var Footer_Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Footer_Component = (function () {
                function Footer_Component() {
                }
                Footer_Component = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        template: "<div class=\"footer fixed\" style=\"font-size: 10px; font-weight: 100;\">\n            <div class=\"pull-right\">\n                10GB of\n                <strong style=\"font-weight: 500\">250GB</strong>\n                Free.\n            </div>\n            <div>\n                <strong style=\"font-weight: 500\">Copyright</strong>\n                Example Company \u00A9 2014-2015\n            </div>\n    </div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Footer_Component);
                return Footer_Component;
            }());
            exports_1("Footer_Component", Footer_Component);
        }
    }
});
