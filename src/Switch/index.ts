import { SwitchDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';

Component({
  props: SwitchDefaultProps,
  mixins: [controlled({
    propsValue: 'checked',
    defaultPropsValue: false
  }), formMixin()],
  methods: {
    onChange(e) {
      const { value } = e.detail;
      this.triggerChange(value);
    },
  },
});
