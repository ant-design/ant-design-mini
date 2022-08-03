import { RadioGroupDefaultProps } from './props';
import formMixin from '../mixins/form';
import controlled from '../mixins/controlled';
import fmtEvent from '../_util/fmtEvent';
import { Store, IDataWithStore, RADIO_GROUP_TYPE } from '../_util/store';

export interface IState {
  value: string;
  disabled: boolean;
}

Component({
  props: RadioGroupDefaultProps,
  data() {
    return {
      _store: new Store<IState>(),
      _type: RADIO_GROUP_TYPE,
    } as IDataWithStore<IState> & {
      cValue: string;
    };
  },
  mixins: [controlled(), formMixin()],
  didMount() {
    const { value, disabled } = this.props;
    this.data._store.dispatch({ value, disabled });
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
    this.data._store.dispatch(payload, false);
  },
  methods: {
    onChange(value) {
      if (this.props.onChange) {
        this.props.onChange.call(this, value, fmtEvent(this.props));
      }
    },
  },
});
