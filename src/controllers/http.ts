import { IncomingMessage, ServerResponse } from 'http';
import { defaultHeaders as headers } from '../service/headers';

const http = {
  cors(req: IncomingMessage, res: ServerResponse): void {
    res.writeHead(200, headers);
    res.end();
  },

  notFound(req: IncomingMessage, res: ServerResponse): void {
    res.writeHead(404, headers);
    res.write(
      JSON.stringify({
        status: 'false',
        message: 'Not Found',
      })
    );
    res.end();
  },
};

export default http;
