"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const headers_1 = require("./headers");
function handleSuccess(res, data) {
    res.writeHead(200, headers_1.defaultHeaders);
    res.write(JSON.stringify({
        status: 'success',
        data,
    }));
    res.end();
}
exports.default = handleSuccess;
