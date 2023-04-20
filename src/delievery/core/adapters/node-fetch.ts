import { Response } from 'node-fetch';
import BaseAdapter from './base.type';
import { Devilery } from '../../data/delievery';
import { tryCatchWith } from '../../utils/trycatch';
import { propEq, runIfExists } from '../../utils/operators';
import { mapStatusDelivery } from '../contracts/http';
export type FetchResult = Promise<Response>;

export const NodeFetchAdapter: BaseAdapter<FetchResult> = (fetchResult) => {
  const deliveryObject = new Devilery();

  tryCatchWith(deliveryObject)(async () => {
    const response = await fetchResult;
    const { status: statusCode } = response;
    const isOk = statusCode > 199 && statusCode < 300;

    if (isOk) runIfExists(deliveryObject.onSuccess, response);
    const deliveryStatus = mapStatusDelivery.find(propEq('status', statusCode));

    if (deliveryStatus) {
      const key = deliveryStatus.key as keyof typeof deliveryObject;
      runIfExists(deliveryObject[key], new Error(deliveryStatus.message));
    }

    try {
      const jsonData = await response.json();
      runIfExists(deliveryObject.onJson, !isOk, jsonData);
    } catch (_) {
      runIfExists(
        deliveryObject.onClientError,
        new Error("Coultn't parse data to json")
      );
    }
  });

  return deliveryObject;
};
