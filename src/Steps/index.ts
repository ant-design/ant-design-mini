import { StepsDefaultProps } from './props';
import { STEPS_TYPE } from '../_util/store';
import { StepsStore } from './store';

Component({
  props: StepsDefaultProps,
  data() {
    return {
      _store: new StepsStore(),
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
