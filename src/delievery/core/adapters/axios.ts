import { AxiosResponse } from 'axios';

import BaseAdapter from './base.type';
import { mapStatusDelivery } from '../contracts/http';
import { Devilery } from '../../data/delievery';
import { propEq, runIfExists } from '../../utils/operators';

export type AxiosResult = Promise<AxiosResponse<any, any>>;

export const AxiosAdapter: BaseAdapter<AxiosResult> = (axiosResult) => {
  const deliveryObject = new Devilery();

  (async () => {
    try {
      const response = await axiosResult;
      const { status: statusCode } = response;
      const isOk = statusCode > 199 && statusCode < 300;

      if (isOk) {
        runIfExists(deliveryObject.onSuccess, response);
        runIfExists(deliveryObject.onJson, !isOk, response.data);
      }
    } catch (error) {
      const { response } = error as unknown as {
        response: { status: number; statusText: string };
      };

      const deliveryStatus = mapStatusDelivery.find(
        propEq('status', response.status)
      );
      if (deliveryStatus) {
        const key = deliveryStatus.key as keyof typeof deliveryObject;
        runIfExists(deliveryObject[key], new Error(deliveryStatus.message));
      }
    }
  })();

  return deliveryObject;
};
