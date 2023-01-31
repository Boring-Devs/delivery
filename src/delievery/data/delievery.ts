import { DeliveryApi, TError, TJson, TSuccess } from "@/delievery/core/contracts/delivery-api-handlers";

export class Devilery implements DeliveryApi {
  onBadRequest?: TError;
  onForbidden?: TError;
  onUnauthorized?: TError;
  onInternalServerError?: TError;
  onNotFound?: TError;
  onClientError?: TError;
  onSuccess?: TSuccess;
  onJson?: TJson;

  success(handler: TSuccess): DeliveryApi {
    this.onSuccess = handler;
    return this;
  }

  notFound(handler: TError): DeliveryApi {
    this.onNotFound = handler;
    return this;
  }

  unauthorized(handler: TError): DeliveryApi {
    this.onUnauthorized = handler;
    return this;
  }

  forbidden(handler: TError): DeliveryApi {
    this.onForbidden = handler;
    return this;
  }

  badRequest(handler: TError): DeliveryApi {
    this.onBadRequest = handler;
    return this;
  }

  internalServerError(handler: TError): DeliveryApi {
    this.onInternalServerError = handler;
    return this;
  }

  clientError(handler: TError): DeliveryApi {
    this.onClientError = handler;
    return this;
  }

  json<T>(handler: TJson<T>): void {
    this.onJson = handler;
  }
}
