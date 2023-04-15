import handleSuccess from '../service/handleSuccess';
import handleError from '../service/handleError';
import { Posts } from '../models/post';
import { IPost } from '../models/interface/IPost';
import IHttpObj from '../models/interface/IHttp';

const posts = {
  async getPosts({ res }: IHttpObj): Promise<void> {
    const allPosts: IPost[] = await Posts.find();
    handleSuccess<IPost[]>(res, allPosts);
    res.end();
  },

  async createPosts({ res, body }: IHttpObj): Promise<void> {
    try {
      if (!body) {
        handleError(res);
        return;
      }

      const data: IPost = JSON.parse(body);
      const isAllowCreatePost = data.content && data.name && data.tags.length > 0 && data.type.length > 0;

      if (isAllowCreatePost) {
        const newPost: IPost = await Posts.create({
          name: data.name,
          content: data.content,
          tags: data.tags,
          type: data.type,
        });
        handleSuccess(res, newPost);
      } else {
        handleError(res);
      }
    } catch (err) {
      handleError(res, err);
    }
  },

  async deletePost({ req, res }: IHttpObj): Promise<void> {
    const { url } = req;
    const id = url?.split('/').pop();
    try {
      const post = await Posts.findByIdAndDelete(id);
      if (post) return handleSuccess<IPost>(res, post);
    } catch (error) {
      handleError(res);
    }
  },

  async deleteAllPosts({ res }: IHttpObj): Promise<void> {
    try {
      await Posts.deleteMany();
      handleSuccess<null>(res, null);
    } catch (error) {
      handleError(res, error);
    }
  },

  async updatePost({ req, res, body }: IHttpObj): Promise<void> {
    const { url } = req;
    const id = url?.split('/').pop();
    try {
      if (!body) {
        return handleError(res);
      }

      const updateData = <IPost>JSON.parse(body);
      const post = await Posts.findByIdAndUpdate(id, updateData, { new: true });

      if (post) return handleSuccess<IPost>(res, post);
    } catch (error) {
      handleError(res);
    }
  },
};

export default posts;
