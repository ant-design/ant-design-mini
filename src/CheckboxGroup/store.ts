import { Store } from '../_util/store';

export interface IState {
    value: string[];
    disabled: boolean;
  }

export class CheckboxGroupStore extends Store<IState> {
  constructor() {
    super({ value: [] });
  }
}
