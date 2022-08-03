import { StepsDefaultProps } from './props';
import { STEPS_TYPE, Store } from '../_util/store';

export interface IState {
  index: number;
  direction: 'horizontal' | 'vertical';
}

Component({
  props: StepsDefaultProps,
  data() {
    return {
      _store: new Store<IState>(),
      _type: STEPS_TYPE,
    };
  },
  didMount() {
    this.updateItemData();
  },
  didUpdate() {
    this.updateItemData();
  },
  methods: {
    updateItemData() {
      const { index, direction } = this.props;
      this.data._store.dispatch({ index, direction });
    },
  },
});
