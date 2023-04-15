"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, '未填寫 name'],
    },
    type: [
        {
            type: String,
            enum: ['group', 'person'],
            required: [true, '未填寫 type'],
        },
    ],
    tags: [
        {
            type: String,
            required: [true, '未填寫 tags'],
        },
    ],
    image: {
        type: String,
        default: '',
    },
    createAt: {
        type: Date,
        default: Date.now,
        select: false,
    },
    content: {
        type: String,
        required: [true, '未填寫 content'],
    },
    likes: {
        type: Number,
        default: 0,
    },
    comments: {
        type: Number,
        default: 0,
    },
});
exports.Posts = mongoose_1.default.model('posts', postsSchema);
