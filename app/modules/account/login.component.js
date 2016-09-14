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
    var Login_Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Login_Component = (function () {
                function Login_Component() {
                }
                Login_Component = __decorate([
                    core_1.Component({
                        selector: "login",
                        template: "<div class=\"loginColumns animated fadeInDown\">\n        <div class=\"row\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 \">\n                            <h3 class=\"m-t-none m-b text-center\">Sign in</h3>\n                            <hr />\n                            <form>\n                                <fieldset>\n                                    <div class=\"form-group has-feedback\">\n                                        <input class=\"form-control\" placeholder=\"Enter email\" type=\"email\" />\n                                    </div>\n                                    <div class=\"form-group has-feedback\">\n                                        <input class=\"form-control\" placeholder=\"Enter password\" type=\"password\" />\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>\n                                            <input type=\"checkbox\" id=\"checkboxSuccess\">\n                                            Remember me.\n                                        </label>\n                                        <a href=\"/\" class=\"pull-right\">Forgot password?</a>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <a class=\"btn btn-sm btn-primary  btn-block\"  style=\"color:#fff\" routerLink=\"/dashboard\">\n                                            Log in\n                                        </a>\n                                    </div>\n                                </fieldset>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Login_Component);
                return Login_Component;
            }());
            exports_1("Login_Component", Login_Component);
        }
    }
});
