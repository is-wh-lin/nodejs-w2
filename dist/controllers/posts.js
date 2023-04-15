"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleSuccess_1 = __importDefault(require("../service/handleSuccess"));
const handleError_1 = __importDefault(require("../service/handleError"));
const post_1 = require("../models/post");
const posts = {
    getPosts({ res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const allPosts = yield post_1.Posts.find();
            (0, handleSuccess_1.default)(res, allPosts);
            res.end();
        });
    },
    createPosts({ res, body }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!body) {
                    (0, handleError_1.default)(res);
                    return;
                }
                const data = JSON.parse(body);
                const isAllowCreatePost = data.content && data.name && data.tags.length > 0 && data.type.length > 0;
                if (isAllowCreatePost) {
                    const newPost = yield post_1.Posts.create({
                        name: data.name,
                        content: data.content,
                        tags: data.tags,
                        type: data.type,
                    });
                    (0, handleSuccess_1.default)(res, newPost);
                }
                else {
                    (0, handleError_1.default)(res);
                }
            }
            catch (err) {
                (0, handleError_1.default)(res, err);
            }
        });
    },
    deletePost({ req, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url } = req;
            const id = url === null || url === void 0 ? void 0 : url.split('/').pop();
            try {
                const post = yield post_1.Posts.findByIdAndDelete(id);
                if (post)
                    return (0, handleSuccess_1.default)(res, post);
            }
            catch (error) {
                (0, handleError_1.default)(res);
            }
        });
    },
    deleteAllPosts({ res }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield post_1.Posts.deleteMany();
                (0, handleSuccess_1.default)(res, null);
            }
            catch (error) {
                (0, handleError_1.default)(res, error);
            }
        });
    },
    updatePost({ req, res, body }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url } = req;
            const id = url === null || url === void 0 ? void 0 : url.split('/').pop();
            try {
                if (!body) {
                    return (0, handleError_1.default)(res);
                }
                const updateData = JSON.parse(body);
                const post = yield post_1.Posts.findByIdAndUpdate(id, updateData, { new: true });
                if (post)
                    return (0, handleSuccess_1.default)(res, post);
            }
            catch (error) {
                (0, handleError_1.default)(res);
            }
        });
    },
};
exports.default = posts;
