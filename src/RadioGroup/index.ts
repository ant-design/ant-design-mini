import { RadioGroupDefaultProps } from './props';
import formMixin from '../mixins/form';
import controlled from '../mixins/controlled';
import fmtEvent from '../_util/fmtEvent';
import { RadioGroupStore } from './store';
import { inject } from '../_util/store';

export interface IState {
  value: string;
  disabled: boolean;
}

Component({
  props: RadioGroupDefaultProps,
  data: {} as { cValue: string },
  mixins: [controlled(), formMixin(), inject(RadioGroupStore)],
  _store: null as RadioGroupStore,
  didMount() {
    const { value, disabled } = this.props;
    this._store.dispatch({ value, disabled });
  },
  didUpdate(prevProps, prevData) {
    const { cValue } = this.data;
    const { disabled } = this.props;
    const payload: any = {};
    if (prevData.cValue !== this.data.cValue) {
      payload.value = cValue;
    }
    if (prevProps.disabled !== this.props.disabled) {
      payload.disabled = disabled;
    }
    this._store.dispatch(payload);
  },
  methods: {
    onChange(value) {
      if (this.props.onChange) {
        this.props.onChange.call(this, value, fmtEvent(this.props));
      }
    },
  },
});
