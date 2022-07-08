import { CheckboxDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';
import  fmtEvent from '../_util/fmtEvent';

Component({
  props: CheckboxDefaultProps,
  mixins: [controlled('checked'), formMixin()],
  methods: {
    onChange(v) {
      const { value } = v.detail;
      this.cOnChange(value, fmtEvent(this.props, {}));
    },
    // 阻止事件冒泡
    emptyEvent() {},
  },
});
