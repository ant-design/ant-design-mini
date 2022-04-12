import { SearchBarDefaultProps } from './props';
import controlled from '../mixins/controlled';

Component({
  mixins: [controlled()],
  props: SearchBarDefaultProps,
  data: {
    focus: false,
  },
  methods: {
    onSubmit(e) {
      const { onSubmit } = this.props;
      if (onSubmit) {
        const { value } = e.detail;
        onSubmit(value);
      }
    },
    onInput(e) {
      const { value } = e.detail;
      this.triggerChange(value);
    },
    onClear() {
      const { onClear } = this.props;
      this.triggerChange('');
      if (onClear) {
        onClear('');
      }
    },
    onCancel() {
      const { onCancel } = this.props;
      this.triggerChange('');
      if (onCancel) {
        onCancel('');
      }
    },
    onBizIconTap() {
      if (this.props.onBizIconTap) {
        this.props.onBizIconTap();
      } else if (this.props.onVoiceTap) {
        this.props.onVoiceTap();
      }
    },
    onFocus(e) {
      this.setData({
        focus: true,
      });
      const { onFocus } = this.props;
      if (onFocus) {
        const { value } = e.detail;
        onFocus(value);
      }
    },
    onBlur(e) {
      this.setData({
        focus: false,
      });
      const { onBlur } = this.props;
      if (onBlur) {
        const { value } = e.detail;
        onBlur(value);
      }
    },
  },
});
