import { Store, STEPS_TYPE } from '../_util/store';

export interface IState {
  index: number;
  direction: 'horizontal' | 'vertical';
}

export class StepsStore extends Store<IState> {
  static type = STEPS_TYPE;
}
