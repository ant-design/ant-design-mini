import { CheckboxDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';

Component({
  props: CheckboxDefaultProps,
  mixins: [controlled('checked'), formMixin()],
  methods: {
    onChange(v) {
      const { value } = v.detail;
      this.cOnChange(value);
    },
  },
});
