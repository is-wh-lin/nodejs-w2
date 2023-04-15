"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const headers_1 = require("../service/headers");
const http = {
    cors(req, res) {
        res.writeHead(200, headers_1.defaultHeaders);
        res.end();
    },
    notFound(req, res) {
        res.writeHead(404, headers_1.defaultHeaders);
        res.write(JSON.stringify({
            status: 'false',
            message: 'Not Found',
        }));
        res.end();
    },
};
exports.default = http;
