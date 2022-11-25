define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpVerbs;
    (function (HttpVerbs) {
        HttpVerbs["GET"] = "GET";
        HttpVerbs["POST"] = "POST";
    })(HttpVerbs || (HttpVerbs = {}));
    class Http {
        get(url) {
            let xhttp = this.createXhttp(HttpVerbs.GET, url);
            return new Promise((resolve, reject) => {
                let xhttp = this.createXhttp(HttpVerbs.GET, url);
                this.configureCallbacks(xhttp, resolve, reject);
                xhttp.send();
            });
        }
        createXhttp(verb, url) {
            let xhttp = new XMLHttpRequest();
            xhttp.open(verb, url, true);
            return xhttp;
        }
        configureCallbacks(xhttp, resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(this.responseText);
                }
                //reject(this.responseText)
            };
        }
    }
    exports.Http = Http;
});
//# sourceMappingURL=http.js.map