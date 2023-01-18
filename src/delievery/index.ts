import fetch, { RequestInfo, RequestInit } from 'node-fetch';
import { Devilery } from './delievery';
import { mapStatusToDeliveryFunction } from './delivery-mappers';

export const delivery = (url: RequestInfo, init?: RequestInit | undefined) => {
  const deliveryObject = new Devilery();

  fetch(url, init)
    .then((response) => {
      const { status: httpStatusCode } = response;
      const itsOkay = httpStatusCode > 199 && httpStatusCode < 300;

      if (itsOkay) {
        if (deliveryObject.onSuccessCallback)
          deliveryObject.onSuccessCallback(response);
      }

      mapStatusToDeliveryFunction.forEach((deliveryStatus) => {
        if (httpStatusCode === deliveryStatus.status) {
          const key = deliveryStatus.key as keyof typeof deliveryObject;

          // TODO: fix those any ASAP
          if (deliveryObject[key])
            ((deliveryObject[key] || ((e: any) => {})) as any)(
              new Error(deliveryStatus.message) as any
            );
        }
      });

      response
        .json()
        .then((data) => {
          if (deliveryObject.onJsonCallback) {
            deliveryObject.onJsonCallback(!itsOkay, data);
          }
        })
        .catch((_) => {
          if (deliveryObject.onClientErrorCallback)
            deliveryObject.onClientErrorCallback(
              new Error("Coultn't parse data to json")
            );
        });
    })
    .catch((error) => {
      if (deliveryObject.onClientErrorCallback)
        deliveryObject.onClientErrorCallback(error);
    });

  return deliveryObject;
};
