import { IncomingMessage, ServerResponse } from 'http';
import HttpControllers from '../controllers/http';
import PostsControllers from '../controllers/posts';

const routes = async (req: IncomingMessage, res: ServerResponse) => {
  const { method, url } = req;
  console.log(method, url);

  let body: string = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  if (url === '/posts' && method === 'GET') {
    PostsControllers.getPosts({ req, res });
  } else if (url === '/posts' && method === 'POST') {
    req.on('end', () => PostsControllers.createPosts({ req, res, body }));
  } else if (url === '/posts' && method === 'DELETE') {
    PostsControllers.deleteAllPosts({ req, res });
  } else if (url?.startsWith('/posts/') && method === 'DELETE') {
    PostsControllers.deletePost({ req, res });
  } else if (url?.startsWith('/posts/') && method === 'PATCH') {
    req.on('end', () => PostsControllers.updatePost({ req, res, body }));
  } else if (method === 'OPTIONS') {
    HttpControllers.cors(req, res);
  } else {
    HttpControllers.notFound(req, res);
  }
};

export default routes;
