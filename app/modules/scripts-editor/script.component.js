System.register(['@angular/core', '../../ui-elements/treeview/treeview', '../../ui-elements/treeview/treenode'], function(exports_1, context_1) {
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
    var core_1, treeview_1, treenode_1;
    var Script_Editor_Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (treeview_1_1) {
                treeview_1 = treeview_1_1;
            },
            function (treenode_1_1) {
                treenode_1 = treenode_1_1;
            }],
        execute: function() {
            Script_Editor_Component = (function () {
                function Script_Editor_Component() {
                    this.nodes = [];
                }
                Script_Editor_Component.prototype.ngOnInit = function () {
                    this.code = "p:{color:red}";
                    var m1 = new treenode_1.TreeNode();
                    m1.text = 'root 1';
                    var m11 = new treenode_1.TreeNode();
                    m11.text = 'm 11';
                    var m111 = new treenode_1.TreeNode();
                    m111.text = 'm 111';
                    m11.addChild(m111);
                    m1.addChild(m11);
                    var m2 = new treenode_1.TreeNode();
                    m2.text = 'root 2';
                    var m3 = new treenode_1.TreeNode();
                    m3.text = 'root 3';
                    var m4 = new treenode_1.TreeNode();
                    m4.text = 'root 4';
                    this.nodes.push(m1, m2, m3, m4);
                };
                Script_Editor_Component = __decorate([
                    core_1.Component({
                        selector: "script-editor",
                        template: "<link href='/libs/css/prism.min.css' />\n    <div class=\"col-lg-4\">\n        <div class=\"form-group\">\n            <tree-view [nodes]=\"nodes\"></tree-view>\n        </div>\n    </div>\n    <div className=\"col-lg-4\">\n\n    </div>\n    <div class=\"col-lg-4\">\n        <pre>\n            <code  class=\"language-css\">{{code}}\n            </code>\n        </pre>\n    </div>\n\n",
                        directives: [treeview_1.TreeView]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Script_Editor_Component);
                return Script_Editor_Component;
            }());
            exports_1("Script_Editor_Component", Script_Editor_Component);
        }
    }
});
