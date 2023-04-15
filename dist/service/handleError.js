"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const headers_1 = require("./headers");
function handleError(res, err) {
    res.writeHead(400, headers_1.defaultHeaders);
    let message = '';
    if (err instanceof Error) {
        message = err.message;
    }
    else {
        message = '欄位未填寫正確或無此 id';
    }
    res.write(JSON.stringify({
        status: false,
        message,
    }));
    res.end();
}
exports.default = handleError;
