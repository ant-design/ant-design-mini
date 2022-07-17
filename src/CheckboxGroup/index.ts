import { CheckboxGroupDefaultProps } from './props';
import equal from 'fast-deep-equal';
import { store } from './context';
import formMixin from '../mixins/form';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: CheckboxGroupDefaultProps,
  mixins: [formMixin()],
  didMount() {
    const { uid, value, disabled } = this.props;
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
    const key = `${this.$page.$id}-${uid}`;
    store.setGroupPropsVal(key, getGroupPropsVal);
    if (disabled) {
      store.updateGroupDisabled(key, disabled);
    }
    if (Array.isArray(value) && value.length > 0) {
      store.updateGroupValue(key, value);
    }
  },
  didUpdate(prevProps, prevData) {
    const { uid: newUID, disabled: newDisabled, value: newValue } = this.props;
    const { uid: oldUID, disabled: oldDisabled, value: oldValue } = prevProps;
    const newKey = `${this.$page.$id}-${newUID}`;
    const oldKey = `${this.$page.$id}-${oldUID}`;
    store.updateGroup(
      newKey,
      {
        isUIDChanged: newUID !== oldUID,
        isDisabledChanged: newDisabled !== oldDisabled,
        isValueChange: !equal(newValue, oldValue),
      },
      { oldUID: oldKey }
    );
  },
  didUnmount() {
    const { uid } = this.props;
    const key = `${this.$page.$id}-${uid}`;
    store.removeGroup(key);
  },
  methods: {
    onChange(val) {
      if (this.props.onChange) {
        this.props.onChange.call(this, val, fmtEvent(this.props));
      }
    },
    _updateFieldValue(v) {
      const key = `${this.$page.$id}-${this.props.uid}`;
      store.updateGroupValue(key, v);
    },
  },
});
