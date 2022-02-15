import { InputItemDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';
import { store } from '../Form/store';

Component({
  mixins: [controlled(), formMixin()],
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
      const { onChange } = this.props;
      if (onChange) {
        const { value } = e.detail;
        this.cOnChange(value);
      }
    },
    triggerOnValuesChange() {
      // 触发
      const { form: formFn, field: fieldFn } = this.props._getCurrentField();
      const form = formFn();
      const field = fieldFn();
      if (form && field) {
        store.trigger(form, field, '');
      }
    },
    onClear() {
      this.hideClear();
      const { onClear, controlled } = this.props;
      if (onClear) {
        onClear('');
      }
      if (!controlled) {
        this.setData({
          cValue: '',
        });
        // 非受控模式下生效
        this.triggerOnValuesChange();
      }
    },
  },
});
