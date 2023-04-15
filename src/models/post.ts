import mongoose, { Document, Model } from 'mongoose';
import { IPost } from './interface/IPost';

const postsSchema = new mongoose.Schema<IPost>({
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

export const Posts: Model<IPost> = mongoose.model('posts', postsSchema);
