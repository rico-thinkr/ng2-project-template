System.register(['./treenode', '../../utils/component-extensions', '@angular/core'], function(exports_1, context_1) {
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
    var treenode_1, component_extensions_1, core_1;
    var TreeView;
    return {
        setters:[
            function (treenode_1_1) {
                treenode_1 = treenode_1_1;
            },
            function (component_extensions_1_1) {
                component_extensions_1 = component_extensions_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TreeView = (function () {
                function TreeView() {
                }
                TreeView.prototype.selected = function (node) {
                    node.selected = !node.selected;
                    this.selectedNode = this.selectedNode === node ? null : node;
                    console.log('selected function');
                    console.log(this.selectedNode);
                };
                TreeView.prototype.ngOnInit = function () {
                };
                TreeView.prototype.addChild = function (node) {
                    console.log('addChild function');
                    var n = new treenode_1.TreeNode();
                    n.text = Date.now() + "";
                    node.addChild(n);
                    console.log(node);
                };
                TreeView.prototype.remove = function (node) {
                    console.log('remove function');
                    if (node.Parent === null || node.Parent === undefined)
                        return this.nodes.splice(this.nodes.indexOf(node), 1)[0];
                    var index = node.Parent.Nodes.indexOf(node);
                    if (index > -1) {
                        return node.Parent.Nodes.splice(index, 1)[0];
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TreeView.prototype, "nodes", void 0);
                TreeView = __decorate([
                    component_extensions_1.NgComponent({
                        selector: "tree-view",
                        template: "<ul *ngIf='nodes' class=\"angular-ui-tree-nodes\">\n        <li  class=\"angular-ui-tree-node\" *ngFor='let node of nodes' (click)='selected(node)'>\n            <div class=\" angular-ui-tree-handle ibox ibox-content tree-item\" style=\"margin-bottom:5px\">\n                {{node.text}}\n                <a class=\"pull-right btn btn-danger btn-xs\" (click)=\"remove(node)\">\n                    <span class=\"fa fa-remove\"></span>\n                </a>\n                <a class=\"pull-right btn btn-primary btn-xs\" style=\"margin-right: 8px;\" (click)=\"addChild(node)\">\n                    <span class=\"fa fa-plus\"></span>\n                </a>\n            </div>\n            <tree-view [nodes]=\"node.Nodes\"></tree-view>\n        </li>\n    </ul>",
                        styles: [".angular-ui-tree {\n    }\n\n    .angular-ui-tree-empty {\n        border: 1px dashed #bbb;\n        min-height: 100px;\n        background-color: #e5e5e5;\n        background-image: -webkit-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), -webkit-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);\n        background-image: -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);\n        background-image: linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);\n        background-size: 60px 60px;\n        background-position: 0 0, 30px 30px;\n        pointer-events: none;\n    }\n\n    .angular-ui-tree-nodes {\n        position: relative;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    .angular-ui-tree-nodes .angular-ui-tree-nodes {\n        padding-left: 20px;\n    }\n\n    .angular-ui-tree-node, .angular-ui-tree-placeholder {\n        position: relative;\n        margin: 0;\n        padding: 0;\n        min-height: 20px;\n        line-height: 20px;\n    }\n\n    .angular-ui-tree-hidden {\n        display: none;\n    }\n\n    .angular-ui-tree-placeholder {\n        margin: 5px 0;\n        padding: 0;\n        min-height: 30px;\n    }\n\n    .angular-ui-tree-handle {\n        cursor: move;\n        text-decoration: none;\n        font-weight: bold;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n        min-height: 20px;\n        line-height: 20px;\n            padding: 10px 10px;\n    }\n\n    .angular-ui-tree-drag {\n        position: absolute;\n        pointer-events: none;\n        z-index: 999;\n        opacity: .8;\n    }\n\n    /* --- Tree --- */\n    .tree-node {\n        border: 1px solid #dae2ea;\n        background: #f8faff;\n        color: #7c9eb2;\n    }\n\n    .nodrop {\n        background-color: #f2dede;\n    }\n\n    .tree-node-content {\n        margin: 10px;\n    }\n    .tree-handle {\n        padding: 10px;\n        background: #428bca;\n        color: #FFF;\n        margin-right: 10px;\n    }\n\n    .tree-item{\n        border:1px solid #e5e6e7;\n            box-shadow:none;\n    }"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TreeView);
                return TreeView;
            }());
            exports_1("TreeView", TreeView);
        }
    }
});
