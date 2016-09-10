System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IF_Structure;
    return {
        setters:[],
        execute: function() {
            /**
             *
             *
             * @export
             * @class IF_Structure
             */
            IF_Structure = (function () {
                function IF_Structure() {
                    this.if_temp = "if ({_condition_}){\n            {_block_};\n        }";
                    this.else_temp = "else{\n            {_block_};\n        }";
                    this.elseif_temp = "else if (_condition_){\n            {_block_};\n        }";
                }
                return IF_Structure;
            }());
            exports_1("IF_Structure", IF_Structure);
        }
    }
});
