import { Store, STEPS_TYPE } from '../_util/store';

export interface IState {
  index: number;
  direction: 'horizontal' | 'vertical';
}

export class StepsStore extends Store<IState> {
  static type = STEPS_TYPE;
  static inject(instane) {
    if (!instane._store) {
      instane._store = new StepsStore();
      instane._store.instance = instane;
    }
  }
}
