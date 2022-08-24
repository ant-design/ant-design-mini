import { Store, RADIO_GROUP_TYPE } from '../_util/store';

export interface IState {
  value: string;
  disabled: boolean;
}

export class RadioGroupStore extends Store<IState> {
  static type = RADIO_GROUP_TYPE;
}
