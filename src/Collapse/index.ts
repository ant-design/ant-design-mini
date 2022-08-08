import equal from 'fast-deep-equal';
import { CollapseDefaultProps } from './props';
import { COLLAPSE_TYPE } from '../_util/store';
import { CollapseStore } from './store';

Component({
  props: CollapseDefaultProps,
  data() {
    return {
      _store: new CollapseStore(),
      _type: COLLAPSE_TYPE,
    };
  },
  didMount() {
    setTimeout(() => {
      const { name, accordion } = this.props;
      this.data._store.dispatch({ accordion });
      this.data._store.updateValue(name);
    });
  },
  didUpdate(prevProps) {
    const { name = [], accordion } = this.props;
    const state = this.data._store.getState();
    if (accordion !== prevProps.accordion) {
      this.data._store.dispatch({ accordion });
    }
    if (!equal(name, prevProps.name) && !equal(name, state.value)) {
      this.data._store.updateValue(name);
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
