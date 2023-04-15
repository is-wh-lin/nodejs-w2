import { ServerResponse } from 'http';
import { defaultHeaders as headers } from './headers';

function handleSuccess<T>(res: ServerResponse, data: T) {
  res.writeHead(200, headers);
  res.write(
    JSON.stringify({
      status: 'success',
      data,
    })
  );
  res.end();
}

export default handleSuccess;
