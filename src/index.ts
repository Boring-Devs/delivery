import { delivery } from './delievery';

const url = 'https://api.github.com/user';

delivery(url, {
  method: 'get',
})
  .notFound(console.log)
  .unauthorized(console.log)
  .forbidden(console.log)
  .internalServerError(console.log)
  .clientError(console.log)
  .success(console.log)
  .json((hasError, data) => {
    if (!hasError) console.log(data);
  });
