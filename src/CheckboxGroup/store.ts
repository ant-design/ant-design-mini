import { Store, CHECKBOX_GROUP_TYPE } from '../_util/store';

export interface IState {
  value: string[];
  disabled: boolean;
}

export class CheckboxGroupStore extends Store<IState> {
  constructor() {
    super({ value: [] });
  }
  static type = CHECKBOX_GROUP_TYPE;
  static inject(instane) {
    if (!instane._store) {
      instane._store = new CheckboxGroupStore();
      instane._store.instance = instane;
    }
  }
}
