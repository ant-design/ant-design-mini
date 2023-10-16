import { TabBarDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import mixinValue from '../mixins/value';
import '../_util/assert-component2';

Component({
  props: TabBarDefaultProps,
  mixins: [
    mixinValue({
      valueKey: 'current',
      defaultValueKey: 'defaultCurrent',
    }),
  ],
  methods: {
    gek() {
      throw new Error('TODO: TabBar');
    },
    onChange(e) {
      const { index } = e.target.dataset;
      const { onChange } = this.props;
      if (index === this.getValue()) {
        return;
      }
      if (!this.isControlled()) {
        this.update(index);
      }
      if (onChange) {
        onChange(index, fmtEvent(this.props, e));
      }
    },
  },
});
