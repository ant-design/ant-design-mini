import { SwitchDefaultProps } from './props';
import formed from '../Form/mixin';

Component({
  props: SwitchDefaultProps,
  mixins: [formed({
    propsValue: 'checked',
    defaultPropsValue: false

  })],
  methods: {
    onChange() {
      const { cValue } = this.data;
      this.triggerChange(!cValue);
    },
  },
});
