import { HTTP_ERROR_CODES, HTTP_ERROR_MESSAGES,  } from ".";

export const mapStatusToDeliveryFunction = [
  {
    status: HTTP_ERROR_CODES.BAD_REQUEST,
    message: HTTP_ERROR_MESSAGES.BAD_REQUEST,
    key: 'onBadRequest',
  },
  {
    status: HTTP_ERROR_CODES.UNAUTHORIZED,
    message: HTTP_ERROR_MESSAGES.UNAUTHORIZED,
    key: 'onUnauthorized',
  },
  {
    status: HTTP_ERROR_CODES.FORBIDDEN,
    message: HTTP_ERROR_MESSAGES.FORBIDDEN,
    key: 'onForbidden',
  },
  {
    status: HTTP_ERROR_CODES.NOT_FOUND,
    message: HTTP_ERROR_MESSAGES.NOT_FOUND,
    key: 'onNotFound',
  },
  {
    status: HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR,
    message: HTTP_ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
    key: 'onInternalServerError',
  }
];
