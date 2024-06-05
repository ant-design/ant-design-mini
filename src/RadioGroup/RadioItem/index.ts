import { RadioItemDefaultProps } from './props';
import { componentContext, componentDisabled, componentValue } from '../context';

Component({
  props: RadioItemDefaultProps,
  data: {
    _checked: false,
    _disabled: false,
  },
  didMount() {
    const { uid } = this.props;
    const key = `${this.$page.$id}-${uid}`;
    componentDisabled.onUpdate(key,
      (this.disabledListener = (d) => {
        this.setData({
          _disabled: this.props.disabled || d,
        });
      }));
    componentValue.onUpdate(key,
      (this.checkedListener = (v) => {
        if (v === this.props.value) {
          this.setData({
            _checked: true,
          });
        } else {
          this.setData({
            _checked: false,
          });
        }
      }));
  },
  didUnmount() {
    const { uid } = this.props;
    const key = `${this.$page.$id}-${uid}`;
    componentValue.offUpdate(key, this.checkedListener);
    componentDisabled.offUpdate(key, this.disabledListener);
  },
  methods: {
    onItemChange(v) {
      const { uid } = this.props;
      const key = `${this.$page.$id}-${uid}`;
      const { value } = v.detail;
      if (value) {
        componentContext.update(key, this.props.value);
      }
    },
    handleNativeFallback() {
      if (this.renderer === 'native') {
        const fakeEvent = {
          detail: {
            value: true,
          }
        };
        this.onItemChange(fakeEvent);
      }
    },
  },
});
