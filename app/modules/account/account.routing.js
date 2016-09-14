System.register(['../../utils/router-extensions', './login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_extensions_1, login_component_1;
    var list, routing;
    return {
        setters:[
            function (router_extensions_1_1) {
                router_extensions_1 = router_extensions_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            list = [
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: 'login', component: login_component_1.Login_Component }
            ];
            exports_1("routing", routing = router_extensions_1.register(list, router_extensions_1.RouterType.Child));
        }
    }
});
