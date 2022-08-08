import { CollapseItemDefaultProps } from './props';
import { COLLAPSE_TYPE, storeMixin } from '../../_util/store';
import { IState, CollapseStore, supportSjs } from '../store';

interface IData {
  _isActive: boolean;
  accordion: boolean;
}

Component({
  props: CollapseItemDefaultProps,
  data: {
    _isActive: false,
    contentHeight: '',
    lastAction: 'auto',
    supportSjs,
    // 避免appx1.0下首次页面加载出现过渡动画
    _first: -1,
    accordion: false,
  },
  _store: null as CollapseStore,
  mixins: [
    storeMixin<IState, IData, typeof CollapseItemDefaultProps>({
      type: COLLAPSE_TYPE,
      mapStateToData: ({ state, props }) => ({
        _isActive: state.value?.indexOf(props.name) > -1,
        accordion: state.accordion,
      }),
    }),
  ],
  methods: {
    onStoreSetted() {
      const { name } = this.props;
      const setFirst = () => this.setData({ _first: this.data._first + 1 });
      const setLastAction = (lastAction) => this.setData({ lastAction });
      const setContentHeight = (contentHeight: string) =>
        this.setData({ contentHeight });
      const getContentHeight = () => this.calcContentHeight();
      this._store.addItem({
        name,
        setFirst,
        setLastAction,
        setContentHeight,
        getContentHeight,
      });
    },

    onChangeItem() {
      const { name, disabled } = this.props;
      if (disabled) return;
      if (supportSjs) {
        // for 2.0
        this._store.triggerItemSjs(name);
      } else {
        this._store.triggerItemNoSjs(name);
      }
    },
    calcContentHeight(): Promise<string> {
      return new Promise((resolve, reject) => {
        my.createSelectorQuery()
          .select(`.amd-collapse-item-content-${this.$id}`)
          .boundingClientRect()
          .exec((res) => {
            if (res && res[0]) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              resolve(`${res[0].height}px`);
            } else {
              reject(res);
            }
          });
      });
    },
    resetContentHeight() {
      if (this.data._isActive) {
        setTimeout(() => {
          this.setData({
            contentHeight: 'auto',
          });
        }, 10);
      }
    },
  },
});
