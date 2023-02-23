import { Devilery } from '../data/delievery';
import { runIfExists } from './operators';

export const tryCatchWith =
  (delivery: Devilery) => async (fn: () => Promise<void>) => {
    try {
      await fn();
    } catch (error) {
      runIfExists(delivery.onClientError, error);
    }
  };
