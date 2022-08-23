import { CheckboxGroupDefaultProps } from './props';
import formMixin from '../mixins/form';
import controlled from '../mixins/controlled';
import fmtEvent from '../_util/fmtEvent';
import { CHECKBOX_GROUP_TYPE } from '../_util/store';
import { CheckboxGroupStore } from './store';

Component({
  props: CheckboxGroupDefaultProps,
  data() {
    return {
      _store: new CheckboxGroupStore(),
      _type: CHECKBOX_GROUP_TYPE,
    } as {
      cValue: string[];
      _store: CheckboxGroupStore;
      _type: string;
    };
  },
  mixins: [controlled(), formMixin()],
  didMount() {
    const { cValue } = this.data;
    const { disabled } = this.props;
    this.data._store.dispatch({ value: cValue || [], disabled });
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
    this.data._store.dispatch(payload);
  },
  methods: {
    onChange(val) {
      if (this.props.onChange) {
        this.props.onChange.call(this, val, fmtEvent(this.props));
      }
    },
    _updateFieldValue(v) {
      this.data._store.dispatch(v);
    },
  },
});
