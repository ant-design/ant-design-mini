import { SwitchDefaultProps } from './props';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';
import  fmtEvent from '../_util/fmtEvent';


Component({
  props: SwitchDefaultProps,
  mixins: [controlled('checked'), formMixin()],
  methods: {
    onChange(e) {
      const { cValue } = this.data;
      this.cOnChange(!cValue,  fmtEvent(this.props, e));
    },
  },
});
