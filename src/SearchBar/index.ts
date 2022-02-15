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
      const { onInput } = this.props;
      if (onInput) {
        const { value } = e.detail;
        this.cOnInput(value);
      }
    },
    onClear() {
      const { onClear } = this.props;
      if (onClear) {
        onClear('');
      }
      this.clearcValue();
    },
    clearcValue() {
      const { controlled: propsControlled } = this.props;
      if (!propsControlled) {
        this.setData({
          cValue: '',
        });
      }
    },
    onCancel() {
      const { onCancel } = this.props;
      if (onCancel) {
        onCancel('');
      }
      this.clearcValue();
    },
    onBizIconTap() {
      if (typeof this.props.onBizIconTap === 'function') {
        this.props.onBizIconTap();
      } else if (typeof this.props.onVoiceTap === 'function') {
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
