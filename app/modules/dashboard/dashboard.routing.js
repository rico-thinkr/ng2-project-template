System.register(['../../utils/router-extensions', './dashboard.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_extensions_1, dashboard_component_1;
    var list, routing;
    return {
        setters:[
            function (router_extensions_1_1) {
                router_extensions_1 = router_extensions_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            list = [
                { path: '', component: dashboard_component_1.Dashboard_Component, loadChildren: 'app/modules/scripts-editor/script-editor.module' }
            ];
            exports_1("routing", routing = router_extensions_1.register(list, router_extensions_1.RouterType.Child));
        }
    }
});
