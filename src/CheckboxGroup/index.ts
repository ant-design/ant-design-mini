import { CheckboxGroupDefaultProps } from './props';
import equal from 'fast-deep-equal';
import { store } from './context';
import formed from '../Form/mixin';

Component({
  props: CheckboxGroupDefaultProps,
  mixins: [formed({
    defaultPropsValue: []
  })],
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
          if (Array.isArray(this.data.cValue)) {
            return this.data.cValue;
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
    const { uid: newUID, disabled: newDisabled } = this.props;
    const { uid: oldUID, disabled: oldDisabled } = prevProps;
    const { cValue: newValue } = this.data;
    const { cValue: oldValue } = prevData;
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
      this.triggerChange(val);
    },
  },
});
