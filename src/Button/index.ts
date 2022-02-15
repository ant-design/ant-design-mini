import { ButtonDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
import htmlType from '../mixins/htmlType';

Component({
  props: ButtonDefaultProps,
  mixins: [htmlType()],
  methods: {
    onTap(e) {
      const { onTap, disabled, loading, _submit } = this.props;
      if (typeof _submit === 'function' && !disabled && !loading) {
        _submit();
      }
      if (onTap && !disabled && !loading) {
        const event = fmtEvent(this.props, e);
        return onTap(event);
      }
    },
  },
});
