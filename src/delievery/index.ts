import fetch from 'node-fetch';

import NodeFetchAdapter, { FetchResult } from './core/adapters/node-fetch';
import { AxiosAdapter, AxiosResult } from './core/adapters';

export const fromFetch = (result: FetchResult) =>
  new NodeFetchAdapter(result).execute();

export const fromAxios = (result: AxiosResult) =>
  new AxiosAdapter(result).execute();
