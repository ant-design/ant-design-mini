import equal from 'fast-deep-equal';
import { CollapseDefaultProps } from './props';
import { CollapseStore } from './store';
import { inject } from '../_util/store';

Component({
  props: CollapseDefaultProps,
  _store: null as CollapseStore,
  mixins: [inject(CollapseStore)],
  didMount() {
    // appx1下collapseItem执行时机兼容
    setTimeout(() => {
      const { name, accordion } = this.props;
      this._store.dispatch({ accordion });
      this._store.updateValue(name);
    });
  },
  didUpdate(prevProps) {
    const { name = [], accordion } = this.props;
    const state = this._store.getState();
    if (accordion !== prevProps.accordion) {
      this._store.dispatch({ accordion });
    }
    if (!equal(name, prevProps.name) && !equal(name, state.value)) {
      this._store.updateValue(name);
    }
  },
  methods: {
    onChange(value) {
      const { onChange } = this.props;
      if (onChange) {
        onChange(value);
      }
    },
  },
});
