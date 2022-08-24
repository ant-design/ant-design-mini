import { Store, RADIO_GROUP_TYPE } from '../_util/store';

export interface IState {
  value: string;
  disabled: boolean;
}

export class RadioGroupStore extends Store<IState> {
  static type = RADIO_GROUP_TYPE;
  static inject(instane) {
    if (!instane._store) {
      instane._store = new RadioGroupStore();
      instane._store.instance = instane;
    }
  }
}
