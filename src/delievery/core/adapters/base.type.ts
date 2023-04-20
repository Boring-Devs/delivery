import { Devilery } from '../../data/delievery';

export default interface BaseAdapter<T> {
  (TResult: T): Devilery;
}
