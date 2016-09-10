System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TreeNode;
    return {
        setters:[],
        execute: function() {
            /**
             * tree node control of ui-tree.
             */
            TreeNode = (function () {
                function TreeNode() {
                    /**
                     * child nodes.
                     */
                    this._nodes = [];
                }
                Object.defineProperty(TreeNode.prototype, "hasChildNodes", {
                    /**
                     *
                     */
                    get: function () {
                        return this._nodes.length !== 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TreeNode.prototype, "Nodes", {
                    get: function () {
                        return this._nodes;
                    },
                    enumerable: true,
                    configurable: true
                });
                TreeNode.prototype.addChild = function (sub) {
                    this._nodes.push(sub);
                    sub.Parent = this;
                };
                return TreeNode;
            }());
            exports_1("TreeNode", TreeNode);
        }
    }
});
