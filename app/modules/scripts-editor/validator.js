System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Validator;
    return {
        setters:[],
        execute: function() {
            Validator = (function () {
                function Validator() {
                }
                Validator.prototype.isBool = function (value) {
                    return true;
                };
                Validator.prototype.isString = function (value) {
                    return true;
                };
                Validator.prototype.isDate = function (value) {
                };
                return Validator;
            }());
            exports_1("Validator", Validator);
        }
    }
});
