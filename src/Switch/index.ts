import { SwitchDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';

Component({
  props: SwitchDefaultProps,
  mixins: [controlled('checked'), formMixin()],
  methods: {
    onChange() {
      const { cValue } = this.data;
      this.cOnChange(!cValue);
    },
  },
});