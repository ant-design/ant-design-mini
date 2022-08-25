import { Store } from '../_util/store';

export interface IState {
  value: string;
  disabled: boolean;
}

export class RadioGroupStore extends Store<IState> {
  static type = 'RadioGroup';
}
