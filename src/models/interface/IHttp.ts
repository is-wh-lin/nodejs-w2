import { IncomingMessage, ServerResponse } from 'http';

export default interface IHttp {
  req: IncomingMessage;
  res: ServerResponse;
  body?: string;
}
