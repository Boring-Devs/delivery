import { Devilery } from '@/delievery/data/delievery';

export default interface BaseAdapter {
  execute(): Devilery;
}
