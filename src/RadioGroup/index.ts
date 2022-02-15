import { RadioGroupDefaultProps } from './props';
import { componentContext, componentDisabled, componentValue } from './context';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';

Component({
  props: RadioGroupDefaultProps,
  mixins: [controlled(), formMixin()],
  didMount() {
    const { uid, value, disabled } = this.props;
    // 用于触发 item.checked 更新
    componentValue.update(uid, value);
    // 用于触发 item.disabled 更新
    componentDisabled.update(uid, disabled);

    componentContext.onUpdate(uid, (v) => {
      this.cOnChange(v);
    });
  },
  didUpdate(prevProps) {
    const { disabled, uid } = this.props;
    if (disabled !== prevProps.disabled) {
      componentDisabled.update(uid, disabled);
    }
    componentValue.update(uid, this.data.cValue);
  },
  didUnmount() {
    const { uid } = this.props;
    componentContext.clearEvent(uid);
    componentDisabled.clearEvent(uid);
    componentValue.clearEvent(uid);
  },
});
