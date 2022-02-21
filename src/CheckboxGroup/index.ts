import { CheckboxGroupDefaultProps } from './props';
import equal from 'fast-deep-equal';
import { store } from './context';
import formMixin from '../mixins/form';

Component({
  props: CheckboxGroupDefaultProps,
  mixins: [formMixin()],
  didMount() {
    const { uid, value } = this.props;
    const getGroupPropsVal = (key: string) => {
      switch (key) {
        case 'onChange':
          if (this.onChange) {
            return this.onChange.bind(this);
          }
          return this.props.onChange;
        case 'value':
          if (Array.isArray(this.props.value)) {
            return this.props.value;
          }
          return [];
        default:
          return this.props[key];
      }
    };
    store.setGroupPropsVal(this.props.uid, getGroupPropsVal);
    if (Array.isArray(value) && value.length > 0) {
      store.updateGroupValue(uid);
    }
  },
  didUpdate(prevProps) {
    const { uid: newUID, disabled: newDisabled, value: newValue } = this.props;
    const { uid: oldUID, disabled: oldDisabled, value: oldValue } = prevProps;
    store.updateGroup(
      newUID,
      {
        isUIDChanged: newUID !== oldUID,
        isDisabledChanged: newDisabled !== oldDisabled,
        isValueChange: !equal(newValue, oldValue),
      },
      { oldUID },
    );
  },
  didUnmount() {
    const { uid } = this.props;
    store.removeGroup(uid);
  },
  methods: {
    onChange(val) {
      if (this.props.onChange) {
        this.props.onChange.call(this, val);
      }
    },
    _updateFieldValue(v) {
      store.updateGroupValue(this.props.uid, v);
    },
  },
});
