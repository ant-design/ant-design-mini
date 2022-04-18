import { CheckboxGroupDefaultProps } from './props';
import equal from 'fast-deep-equal';
import { store } from './context';
import controlled from '../mixins/controlled';
import formed from '../Form/mixin';

Component({
  props: CheckboxGroupDefaultProps,
  mixins: [controlled({ defaultPropsValue: [] }), formed()],
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
    store.setGroupPropsVal(this.props.uid, getGroupPropsVal);
    if (disabled) {
      store.updateGroupDisabled(uid, disabled);
    }

    if (Array.isArray(value) && value.length > 0) {
      store.updateGroupValue(uid, value);
    }
  },
  didUpdate(prevProps, prevData) {
    const { uid: newUID, disabled: newDisabled } = this.props;
    const { uid: oldUID, disabled: oldDisabled } = prevProps;
    const { cValue: newValue } = this.data;
    const { cValue: oldValue } = prevData;
    store.updateGroup(
      newUID,
      {
        isUIDChanged: newUID !== oldUID,
        isDisabledChanged: newDisabled !== oldDisabled,
        isValueChange: !equal(newValue, oldValue),
      },
      { oldUID }
    );
  },
  didUnmount() {
    const { uid } = this.props;
    store.removeGroup(uid);
  },
  methods: {
    onChange(val) {
      if (this.props.onChange) {
        this.props.onChange(val);
      }
    },
  },
});
