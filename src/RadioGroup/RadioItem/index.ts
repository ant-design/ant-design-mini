import { RadioItemDefaultProps } from './props';
import { RADIO_GROUP_TYPE, connect, Store } from '../../_util/store';
import { IState } from '../index';

interface IData {
  _checked: boolean;
  _disabled: boolean;
}

Component({
  props: RadioItemDefaultProps,
  data: {
    _checked: false,
    _disabled: false,
  },
  _store: null as Store<IState>,
  mixins: [
    connect<IState, IData, typeof RadioItemDefaultProps>({
      type: RADIO_GROUP_TYPE,
      mapStateToData: ({ state, props }) => ({
        _disabled: state.disabled || props.disabled,
        _checked: state.value === props.value,
      }),
    }),
  ],
  methods: {
    onItemChange(e) {
      const { value } = e.detail;
      const controlled = this._store.getInstance().props.controlled;
      if (value) {
        if (!controlled) {
          this._store.dispatch({ value: this.props.value });
        }
        this._store.getInstance().onChange(this.props.value);
      }
    },
  },
});
