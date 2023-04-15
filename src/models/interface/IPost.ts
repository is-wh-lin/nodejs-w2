import { Document } from 'mongoose';

export interface IPost extends Document {
  name: string;
  content: string;
  type: string;
  tags: string[];
  image?: string;
  likes?: number;
  comments?: number;
  createAt?: Date;
}
