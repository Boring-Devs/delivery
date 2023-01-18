import {
  DeliveryShape,
  TErrorCallback,
  TJson,
  TSuccessCallback,
} from './delivery.types';

export class Devilery implements DeliveryShape {
  onBadRequestCallback?: TErrorCallback | undefined;
  onForbiddenCallback?: TErrorCallback | undefined;
  onUnauthorizedCallback?: TErrorCallback | undefined;
  onInternalServerErrorCallback?: TErrorCallback | undefined;
  onNotFoundCallback?: TErrorCallback | undefined;
  onClientErrorCallback?: TErrorCallback | undefined;
  onSuccessCallback?: TSuccessCallback | undefined;
  onJsonCallback?: TJson;

  success(callback: TSuccessCallback): DeliveryShape {
    this.onSuccessCallback = callback;
    return this;
  }

  notFound(callback: TErrorCallback): DeliveryShape {
    this.onNotFoundCallback = callback;
    return this;
  }

  unauthorized(callback: TErrorCallback): DeliveryShape {
    this.onUnauthorizedCallback = callback;
    return this;
  }

  forbidden(callback: TErrorCallback): DeliveryShape {
    this.onForbiddenCallback = callback;
    return this;
  }

  badRequest(callback: TErrorCallback): DeliveryShape {
    this.onBadRequestCallback = callback;
    return this;
  }

  internalServerError(callback: TErrorCallback): DeliveryShape {
    this.onInternalServerErrorCallback = callback;
    return this;
  }

  clientError(callback: TErrorCallback): DeliveryShape {
    this.onClientErrorCallback = callback;
    return this;
  }

  json<T>(callback: TJson<T>): void {
    this.onJsonCallback = callback;
  }
}
