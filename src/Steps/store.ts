import { Store } from '../_util/store';

export interface IState {
  index: number;
  direction: 'horizontal' | 'vertical';
}

export class StepsStore extends Store<IState> {
  constructor() {
    super({ index: 0 });
  }
}
