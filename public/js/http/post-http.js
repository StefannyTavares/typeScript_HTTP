define(["require", "exports", "./http"], function (require, exports, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostHttp {
        constructor() {
            this.http = new http_1.Http();
        }
        query() {
            this.http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (responseText) {
                console.log(JSON.parse(responseText));
            });
        }
    }
    exports.PostHttp = PostHttp;
});
//# sourceMappingURL=post-http.js.map