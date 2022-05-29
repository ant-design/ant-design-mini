import { RadioGroupDefaultProps } from './props';
import { componentContext, componentDisabled, componentValue } from './context';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';

Component({
  props: RadioGroupDefaultProps,
  mixins: [controlled(), formMixin()],
  didMount() {
    const { uid, value, disabled } = this.props;
    const key = `${this.$page.$id}-${uid}`;
    // 用于触发 item.checked 更新
    componentValue.update(key, value);
    // 用于触发 item.disabled 更新
    componentDisabled.update(key, disabled);

    componentContext.onUpdate(key, (v) => {
      this.cOnChange(v);
    });
  },
  didUpdate(prevProps) {
    const { disabled, uid } = this.props;
    const key = `${this.$page.$id}-${uid}`;
    if (disabled !== prevProps.disabled) {
      componentDisabled.update(key, disabled);
    }
    componentValue.update(key, this.data.cValue);
  },
  didUnmount() {
    const { uid } = this.props;
    const key = `${this.$page.$id}-${uid}`;
    componentContext.clearEvent(key);
    componentDisabled.clearEvent(key);
    componentValue.clearEvent(key);
  },
});
