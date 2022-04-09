import { InputItemDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formed from  '../Form/mixin'

Component({
  mixins: [controlled(), formed()],
  props: InputItemDefaultProps,
  data: {
    showClear: false,
  },
  methods: {
    hideClear() {
      this.setData({
        showClear: false,
      });
    },
  
    showClear() {
      this.setData({
        showClear: true,
      });
    },

    // 按钮消失
    onBlur(e) {
      this.hideClear();
      const { onBlur } = this.props;
      if (onBlur) {
        const { value } = e.detail;
        onBlur(value);
      }
    },
    // 按钮消失
    onConfirm(e) {
      this.hideClear();
      const { onConfirm } = this.props;
      if (onConfirm) {
        const { value } = e.detail;
        onConfirm(value);
      }
    },

    // 展示无需蒙层
    onFocus(e) {
      this.showClear();
      const { onFocus } = this.props;
      if (onFocus) {
        const { value } = e.detail;
        onFocus(value);
      }
    },
  
    onChange(e) {
      const { value } = e.detail;
      this.triggerChange(value)
    },
  
    onClear() {
      this.hideClear();
      this.triggerChange('')
      const { onClear } = this.props;
      if (onClear) {
        onClear('');
      }
   
    },
  },
});
