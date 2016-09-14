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
    var Nav_Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Nav_Component = (function () {
                function Nav_Component() {
                    this.authrizied = true; //是否验证通过。
                    this.user = {
                        fullname: "Rico Wang",
                        email: "133302599@qq.com"
                    };
                    this.authrizied = true;
                }
                Nav_Component = __decorate([
                    core_1.Component({
                        selector: "navbar",
                        template: "<nav  class=\"navbar navbar-fixed-top\" role=\"navigation\" style=\"min-height: 40px\" *ngIf=\"user && authrizied\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"/\">Work Promoter</a>\n                    <p class=\"navbar-text\">Preview 1.0</p>\n                </div>\n                <ul class=\"nav navbar-top-links navbar-right\" style=\"margin-right: -10px;\">\n                    <li class=\"dropdown\" style=\"padding-top: 0px\">\n                        <a style=\"color: #676a6c\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <img src=\"/libs/images/i8.JPG\" class=\"img-circle prof\" />\n\n                        </a>\n                        <ul class=\"dropdown-menu\" style=\"width: 200px; border-radius: 0;\">\n                            <li>\n                                <a href=\"#\" class=\"account-details\">\n                                    <img alt=\"image\" class=\"img-circle avator\" src=\"/libs/images/i8.JPG\">\n                                    <div class=\"m-b-xs\" style=\"margin-bottom: 10px\">\n                                        {{user.fullName}}\n                                    </div>\n                                    <div class=\"account-details__email\">{{user.email}}</div>\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"dropdown-item\"  >\n                                    <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i> Account Setting\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"dropdown-item\">\n                                    <i class=\"fa fa-bell\" aria-hidden=\"true\"></i> Notifications\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"dropdown-item\" >\n                                    <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Login Out\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n\n                </ul>\n            </div>\n        </nav>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Nav_Component);
                return Nav_Component;
            }());
            exports_1("Nav_Component", Nav_Component);
        }
    }
});
