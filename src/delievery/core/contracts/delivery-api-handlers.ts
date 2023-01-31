import { IResponse } from "./http";

export type TSuccess = (response: IResponse) => DeliveryApi | void;
export type TError = (error: Error) => DeliveryApi | void;
export type TJson<T = any> = (hasError: boolean, data: T) => void;

type TDeliveryCallbacks = {
  onSuccess: TSuccess;
  onBadRequest: TError;
  onForbidden: TError;
  onUnauthorized: TError;
  onInternalServerError: TError;
  onNotFound: TError;
  onClientError: TError;
  onJson: TJson;
}

export interface DeliveryApi extends Partial<TDeliveryCallbacks> {
  success(callback: TSuccess): DeliveryApi;
  notFound(callback: TError): DeliveryApi;
  unauthorized(callback: TError): DeliveryApi;
  forbidden(callback: TError): DeliveryApi;
  badRequest(callback: TError): DeliveryApi;
  internalServerError(callback: TError): DeliveryApi;
  clientError(callback: TError): DeliveryApi;
  json(callback: TJson): void;
}
