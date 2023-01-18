import { httpErrors } from './deliver-errors';

export const mapStatusToDeliveryFunction = [
  {
    status: 400,
    message: httpErrors.badRequest,
    key: 'onBadRequestCallback',
  },
  {
    status: 401,
    message: httpErrors.unauthorized,
    key: 'onUnauthorizedCallback',
  },
  {
    status: 403,
    message: httpErrors.forbidden,
    key: 'onForbiddenCallback',
  },
  {
    status: 404,
    message: httpErrors.notFound,
    key: 'onNotFoundCallback',
  },
  {
    status: 500,
    message: httpErrors.internalServerError,
    key: 'onInternalServerErrorCallback',
  },
];
