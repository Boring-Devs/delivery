// Todo: remove node-fetch types to prevent coupling. Build our own types to reduce coupling.
import fetch, { RequestInfo, RequestInit } from 'node-fetch';

import { mapStatusDelivery } from '@/delievery/core/contracts/http';
import { runIfExists, propEq } from '@/delievery/utils/operators';
import { Devilery } from '@/delievery/data/delievery';

export const delivery = (url: RequestInfo, init?: RequestInit) => {
  const deliveryObject = new Devilery();

  fetch(url, init)
    .then((response) => {
      const { status: statusCode } = response;
      const isOk = statusCode > 199 && statusCode < 300;
      if (isOk) runIfExists(deliveryObject.onSuccess, response);
      const deliveryStatus = mapStatusDelivery.find(propEq('status', statusCode));
      if (deliveryStatus) {
        const key = deliveryStatus.key as keyof typeof deliveryObject;
        runIfExists(deliveryObject[key], new Error(deliveryStatus.message));
      }
      response
        .json()
        .then(data => runIfExists(deliveryObject.onJson, !isOk, data))
        .catch((_) => runIfExists(deliveryObject.onClientError, 
          new Error("Coultn't parse data to json")
        ));
    })
    .catch(runIfExists(deliveryObject.onClientError));
  return deliveryObject;
};
