import { Devilery } from '@/delievery/data/delievery';

export default interface BaseAdapter<T> {
  (TResult: T): Devilery;
}
