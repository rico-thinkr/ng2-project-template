System.register(['@angular/platform-browser', '@angular/common', '@angular/forms', '@angular/http', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (platform_browser_1_1) {
                exports_1({
                    "BrowserModule": platform_browser_1_1["BrowserModule"]
                });
            },
            function (common_1_1) {
                exports_1({
                    "CommonModule": common_1_1["CommonModule"]
                });
            },
            function (forms_1_1) {
                exports_1({
                    "FormsModule": forms_1_1["FormsModule"]
                });
            },
            function (http_1_1) {
                exports_1({
                    "HttpModule": http_1_1["HttpModule"]
                });
            },
            function (core_1_1) {
                exports_1({
                    "NgModule": core_1_1["NgModule"]
                });
            }],
        execute: function() {
        }
    }
});
