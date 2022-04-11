import { SwitchDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formed from '../Form/mixin';

Component({
  props: SwitchDefaultProps,
  mixins: [controlled({
    propsValue: 'checked',
    defaultPropsValue: false
  }), formed()],
  methods: {
    onChange(e) {
      const { value } = e.detail;
      this.triggerChange(value);
    },
  },
});
