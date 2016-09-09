System.register(['@angular/http', 'rxjs/Observable', './rxjs-extensions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, Observable_1;
    var Http_Service;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            Http_Service = (function () {
                /**
                 * [constructor description]
                 * @param  {Http}   privatehttp [description]
                 * @return {[type]}             [description]
                 */
                function Http_Service(http) {
                    this.http = http;
                }
                /**
                 * Use http request get data from api ..
                 * @param  {api}    string [where the request to]
                 */
                Http_Service.prototype.getData = function (api) {
                    return this.http.get(api)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                /**
                 * post data to server.
                 */
                Http_Service.prototype.postData = function (api, data) {
                    var body = JSON.stringify({ name: name });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    console.log("[post data]: " + body + " \n [api address]: " + api);
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(api, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                /**
                 * @param  {Response} res [response object]
                 * @return {[any]}       [return data of response]
                 */
                Http_Service.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                /**
                 * error handler
                 * @param  {any}    error [description]
                 * @return {[type]}       [description]
                 */
                Http_Service.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                return Http_Service;
            }());
            exports_1("Http_Service", Http_Service);
        }
    }
});
