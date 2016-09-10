System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Generic;
    return {
        setters:[],
        execute: function() {
            (function (Generic) {
                /**
                 * [键值对]
                 * @type {Object}
                 */
                var KeyValuePair = (function () {
                    function KeyValuePair() {
                    }
                    return KeyValuePair;
                }());
                Generic.KeyValuePair = KeyValuePair;
                var Dictionary = (function () {
                    function Dictionary() {
                        this._keys = [];
                        this._values = [];
                        this._items = [];
                    }
                    Object.defineProperty(Dictionary.prototype, "Keys", {
                        get: function () {
                            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                                var item = _a[_i];
                                this._keys.push(item.Key);
                            }
                            return this._keys;
                            ;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Dictionary.prototype, "Values", {
                        get: function () {
                            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                                var item = _a[_i];
                                this._values.push(item.Value);
                            }
                            return this._values;
                            ;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Dictionary.prototype.add = function (key, value) {
                        if (key === null || key === undefined)
                            throw new Error('ArgumentNullException: the key can not be null !');
                        if (this.hasKey(key))
                            throw new Error('ArgumentException: the key is included in Dictionary !');
                        var item = {
                            Key: key,
                            Value: value
                        };
                        this._items.push(item);
                    };
                    Dictionary.prototype.hasKey = function (key) {
                        this._keys.forEach(function (k, i) {
                            if (k === key) {
                                return true;
                            }
                        });
                        return false;
                    };
                    return Dictionary;
                }());
                Generic.Dictionary = Dictionary;
            })(Generic = Generic || (Generic = {}));
            exports_1("Generic", Generic);
        }
    }
});
