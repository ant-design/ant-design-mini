import { CheckboxGroupDefaultProps } from './props';
import formMixin from '../mixins/form';
import controlled from '../mixins/controlled';
import fmtEvent from '../_util/fmtEvent';
import { CheckboxGroupStore } from './store';
import { inject } from '../_util/store';

Component({
  props: CheckboxGroupDefaultProps,
  data: {} as { cValue: string[] },
  _store: null as CheckboxGroupStore,
  mixins: [controlled(), formMixin(), inject(CheckboxGroupStore)],
  didMount() {
    const { cValue } = this.data;
    const { disabled } = this.props;
    this._store.dispatch({ value: cValue || [], disabled });
  },
  didUpdate(prevProps, prevData) {
    const { cValue } = this.data;
    const { disabled } = this.props;
    const payload: any = {};
    if (prevData.cValue !== this.data.cValue) {
      payload.value = cValue || [];
    }
    if (prevProps.disabled !== this.props.disabled) {
      payload.disabled = disabled;
    }
    this._store.dispatch(payload);
  },
  methods: {
    onChange(val) {
      if (this.props.onChange) {
        this.props.onChange.call(this, val, fmtEvent(this.props));
      }
    },
    _updateFieldValue(v) {
      this._store.dispatch(v);
    },
  },
});
