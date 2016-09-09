System.register(['@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1;
    var RouterType;
    /**
     * register router list.
     * @param  {Routes}                 list [route list.]
     * @param  {RouterType}          type [type of route list]
     * @return {ModuleWithProviders}      [return register result]
     */
    function register(list, type) {
        return type == RouterType.Root ? router_1.RouterModule.forRoot(list) : router_1.RouterModule.forChild(list);
    }
    exports_1("register", register);
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            (function (RouterType) {
                RouterType[RouterType["Root"] = 0] = "Root";
                RouterType[RouterType["Child"] = 1] = "Child";
            })(RouterType || (RouterType = {}));
            exports_1("RouterType", RouterType);
        }
    }
});
