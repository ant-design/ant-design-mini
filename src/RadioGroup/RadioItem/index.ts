import { RadioItemDefaultProps } from './props';
import { connect, Store } from '../../_util/store';
import { IState, RadioGroupStore } from '../store';

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
      storeFactory: RadioGroupStore,
      mapStateToData: ({ state, props }) => ({
        _disabled: state.disabled || props.disabled,
        _checked: state.value === props.value,
      }),
    }),
  ],
  methods: {
    onItemChange(e) {
      const { value } = e.detail;
      const controlled = this._store.instance.props.controlled;
      if (value) {
        if (!controlled) {
          this._store.dispatch({ value: this.props.value });
        }
        this._store.instance.onChange(this.props.value);
      }
    },
  },
});
