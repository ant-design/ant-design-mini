import { StepsDefaultProps } from './props';
import { StepsStore } from './store';
import { inject } from '../_util/store';

Component({
  props: StepsDefaultProps,
  mixins: [inject(StepsStore)],
  _store: null as StepsStore,
  didMount() {
    this.updateItemData();
  },
  didUpdate() {
    this.updateItemData();
  },
  methods: {
    updateItemData() {
      const { index, direction } = this.props;
      this._store.dispatch({ index, direction });
    },
  },
});
