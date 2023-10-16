import { FormSelectorDefaultProps } from './props';
import createComponent from '../createComponent';
import fmtEvent from '../../_util/fmtEvent';

createComponent({
  props: FormSelectorDefaultProps,
  methods: {
    onChange(value, item, e) {
      this.emit('onChange', value);
      if (this.props.onChange) {
        this.props.onChange(value, item, fmtEvent(this.props, e));
      }
    },
    onSelectMax(value, item, e) {
      if (this.props.onSelectMax) {
        this.props.onSelectMax(value, item, fmtEvent(this.props, e));
      }
    },
    onSelectMin(value, item, e) {
      if (this.props.onSelectMin) {
        this.props.onSelectMin(value, item, fmtEvent(this.props, e));
      }
    },
  },
});
