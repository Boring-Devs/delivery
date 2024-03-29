import axios from 'axios';
import fetch from 'node-fetch';

import { fromAxios, fromFetch } from '../src';

const url = 'https://api.github.com/users/nicasiomarques';

fromAxios(axios.get(url))
  .notFound(console.log)
  .unauthorized(console.log)
  .forbidden(console.log)
  .internalServerError(console.log)
  .clientError(console.log)
  .success(console.log)
  .json((hasError, data) => {
    if (!hasError) console.log(data);
  });

fromFetch(fetch(url, { method: 'get' }))
  .notFound(console.log)
  .unauthorized(console.log)
  .forbidden(console.log)
  .internalServerError(console.log)
  .clientError(console.log)
  .success(console.log)
  .json((hasError, data) => {
    if (!hasError) console.log(data);
  });
