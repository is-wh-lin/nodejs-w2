"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHeaders = void 0;
const defaultHeaders = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, DELETE',
    'Content-Type': 'application/json',
};
exports.defaultHeaders = defaultHeaders;
