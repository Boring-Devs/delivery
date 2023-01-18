import { Response } from 'node-fetch';

export type TSuccessCallback = (response: Response) => DeliveryShape | void;
export type TErrorCallback = (error: Error) => DeliveryShape | void;
export type TJson<T = any> = (hasError: boolean, data: T) => void;

export interface DeliveryShape {
  onSuccessCallback?: TSuccessCallback;
  onBadRequestCallback?: TErrorCallback;
  onForbiddenCallback?: TErrorCallback;
  onUnauthorizedCallback?: TErrorCallback;
  onInternalServerErrorCallback?: TErrorCallback;
  onNotFoundCallback?: TErrorCallback;
  onClientErrorCallback?: TErrorCallback;
  onJsonCallback?: TJson;

  success(callback: TSuccessCallback): DeliveryShape;
  notFound(callback: TErrorCallback): DeliveryShape;
  unauthorized(callback: TErrorCallback): DeliveryShape;
  forbidden(callback: TErrorCallback): DeliveryShape;
  badRequest(callback: TErrorCallback): DeliveryShape;
  internalServerError(callback: TErrorCallback): DeliveryShape;
  clientError(callback: TErrorCallback): DeliveryShape;
  json(callback: TJson): void;
}
