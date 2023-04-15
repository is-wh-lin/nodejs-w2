import { IncomingMessage, ServerResponse } from 'http';
import './connections';
import routes from './routes';

const app = async (req: IncomingMessage, res: ServerResponse) => {
  routes(req, res);
};

export default app;
