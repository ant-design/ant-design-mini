import { CheckboxDefaultProps } from './props';
import formed from '../Form/mixin';

Component({
  props: CheckboxDefaultProps,
  mixins: [
    formed({
      propsValue: 'checked',
      defaultPropsValue: false,
    }),
  ],
  methods: {
    onChange(e) {
      const { value } = e.detail;
      this.triggerChange(value);
    },
  },
});
