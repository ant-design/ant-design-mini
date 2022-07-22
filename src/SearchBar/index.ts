import { SearchBarDefaultProps } from './props';
import controlled from '../mixins/controlled';
import fmtEvent from '../_util/fmtEvent';

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
        onSubmit(value, fmtEvent(this.props, e));
      }
    },
    onInput(e) {
      const { onInput } = this.props;
      if (onInput) {
        const { value } = e.detail;
        this.cOnInput(value, fmtEvent(this.props, e));
      }
    },
    onClear() {
      const { onClear } = this.props;
      if (onClear) {
        onClear('', fmtEvent(this.props));
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
        onCancel('', fmtEvent(this.props));
      }
      this.clearcValue();
    },
    onBizIconTap(e) {
      if (typeof this.props.onBizIconTap === 'function') {
        this.props.onBizIconTap(fmtEvent(this.props, e));
      } else if (typeof this.props.onVoiceTap === 'function') {
        this.props.onVoiceTap(fmtEvent(this.props, e));
      }
    },
    onFocus(e) {
      this.setData({
        focus: true,
      });
      const { onFocus } = this.props;
      if (onFocus) {
        const { value } = e.detail;
        onFocus(value, fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      this.setData({
        focus: false,
      });
      const { onBlur } = this.props;
      if (onBlur) {
        const { value } = e.detail;
        onBlur(value, fmtEvent(this.props, e));
      }
    },
  },
});
