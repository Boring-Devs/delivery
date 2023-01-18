export const httpErrors = {
  badRequest:
    '400: This normally occurs when the server cannot understand and process a request due to a client error. Missing data, domain validation, and invalid formatting are some examples that cause the status code 400 to be sent.',
  unauthorized:
    '401: This normally occurs when authentication is required but has failed or not been provided',
  forbidden:
    '403: This happens when a valid request was sent, but the server refuses to accept it. This happens if a client/user requires the necessary permission or they may need an account to access the resource. Unlike a status code 401, authentication will not apply here.',
  notFound:
    '404: This happens when the request is valid, but the resource cannot be found on the server. Even though these are grouped in the Client Errors “bucket,” they are often due to improper URL redirection.',
  internalServerError:
    '500: The status code 500 happens when the server cannot fulfill a request due to an unexpected issue. Web developers typically have to comb through the server logs to determine where the exact issue is coming from.',
};
