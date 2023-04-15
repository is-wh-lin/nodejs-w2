import { ServerResponse } from 'http';
import { defaultHeaders as headers } from './headers';

function handleError(res: ServerResponse, err?: Error | unknown) {
  res.writeHead(400, headers);
  let message: string = '';
  if (err instanceof Error) {
    message = err.message;
  } else {
    message = '欄位未填寫正確或無此 id';
  }
  res.write(
    JSON.stringify({
      status: false,
      message,
    })
  );
  res.end();
}

export default handleError;
