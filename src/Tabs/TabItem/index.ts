import equal from 'fast-deep-equal';
import { TabItemDefaultProps } from './props';
import { compareVersion } from '../../_util/compareVersion';
import { connect } from '../../_util/store';
import { TabStore, IState } from '../store';

const isBaseSwiper = compareVersion('2.0.0', my.SDKVersion) < 0 ? true : false;

interface IData {
  fallback: boolean;
}
Component({
  props: TabItemDefaultProps,
  data: {
    isBaseSwiper,
    fallback: false,
  },
  _store: null as TabStore,
  mixins: [
    connect<IState, IData>({
      storeFactory: TabStore,
      mapStateToData: ({ state }) => ({ fallback: state.fallback }),
    }),
  ],
  didUpdate(prevProps) {
    // 更新视图
    if (!equal(prevProps.tab, this.props.tab)) {
      this?._store.updateItem(this.$id, this.props.tab as any);
    }
  },
  didUnmount() {
    this._store.removeItem(this.$id);
  },
  methods: {
    onStoreSetted() {
      this._store.addItem(this.$id, this.props.tab as any);
    },
  },
});
