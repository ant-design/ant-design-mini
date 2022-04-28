import { TextAreaDefaultProps } from './props';
import formed from '../Form/mixin';

Component({
  mixins: [formed()],
  props: TextAreaDefaultProps,
  data: {
  },
  methods: {
    onBlur(e) {
      const { onBlur } = this.props;
      if (onBlur) {
        const { value } = e.detail;
        onBlur(value);
      }
    },
  
    onConfirm(e) {
      const { onConfirm } = this.props;
      if (onConfirm) {
        const { value } = e.detail;
        onConfirm(value);
      }
    },
  
    onFocus(e) {
      const { onFocus } = this.props;
      if (onFocus) {
        const { value } = e.detail;
        onFocus(value);
      }
    },

    onChange(e) {
      const { value } = e.detail;
      this.triggerChange(value);
    },
  },
});
