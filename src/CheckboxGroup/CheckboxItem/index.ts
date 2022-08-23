import { CheckboxItemDefaultProps } from './props';
import { CHECKBOX_GROUP_TYPE, connect } from '../../_util/store';
import { IState, CheckboxGroupStore } from '../store';

interface IData {
  _checked: boolean;
  _disabled: boolean;
}
Component({
  props: CheckboxItemDefaultProps,
  data: {
    _checked: false,
    _disabled: false,
  },
  _store: null as CheckboxGroupStore,
  mixins: [
    connect<IState, IData, typeof CheckboxItemDefaultProps>({
      type: CHECKBOX_GROUP_TYPE,
      mapStateToData: ({ state, props }) => ({
        _disabled: state.disabled || props.disabled,
        _checked: state.value.indexOf(props.value) > -1,
      }),
    }),
  ],
  methods: {
    onItemChange(checked) {
      const state = this._store.getState();
      const controlled = this._store.getInstance().props.controlled;
      let newValue = [];
      if (!checked) {
        newValue = state.value.filter((v) => v !== this.props.value);
      } else {
        newValue = [...state.value, this.props.value];
      }
      if (!controlled) {
        this._store.dispatch({ value: newValue });
      }
      this._store.getInstance().onChange(newValue);
    },
  },
});
