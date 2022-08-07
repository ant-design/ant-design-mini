import equal from 'fast-deep-equal';
import { FilterItemDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';
import { FILTER_TYPE, storeMixin } from '../../_util/store';
import { FilterStore, IState } from '../store';

interface IData {
  show: boolean;
  cValue: ArrayOrItem<string>;
}
Component({
  props: FilterItemDefaultProps,
  data: {
    cValue: [] as ArrayOrItem<string>, // 选择前的value
    show: false, // 显示隐藏
    currentValue: [] as ArrayOrItem<string>, // 实时value
  },
  _store: null as FilterStore,
  mixins: [
    storeMixin<IState, IData>({
      type: FILTER_TYPE,
      mapStateToData({ state }) {
        const item = state.filterItems.find((v) => v.id === String(this.$id));
        if (item) {
          return {
            show: item.active,
            cValue: item.value,
          };
        }
      },
    }),
  ],
  didUpdate(prevProps) {
    // 外部改变value的情况
    if (
      !equal(this.props.value, prevProps.value) &&
      !equal(this.data.cValue, this.props.value)
    ) {
      this._store.changeItemData(this.$id, {
        value: this.props.value,
      });
    }
  },
  didUnmount() {
    this._store.removeItem(this.$id);
  },
  methods: {
    onStoreSetted() {
      this._store.addItem(this.$id, {
        item: this.props as any,
        triggleVisible: this.triggleVisible.bind(this),
        onFormat: this.props.onFormat.bind(this),
      });
    },
    onChange(v) {
      const event = fmtEvent(this.props);
      const { onChange, type } = this.props;
      if (onChange) {
        onChange(v, event);
      }
      if (type === 'multiple') {
        this.setData({
          currentValue: v,
        });
        return;
      }
      // 单选
      this._store.changeItemData(this.$id, {
        active: false,
        value: v,
      });
    },

    confirmSelector() {
      const event = fmtEvent(this.props);
      const { onOK, onChange } = this.props;
      const { currentValue } = this.data;
      this._store.changeItemData(this.$id, {
        active: false,
        value: currentValue,
      });
      if (onOK) {
        onOK(currentValue, event);
      }
      if (onChange) {
        onChange(currentValue, event);
      }
    },
    resetSelector() {
      const event = fmtEvent(this.props);
      const { onChange } = this.props;
      this.setData({
        currentValue: this.data.cValue,
      });
      if (onChange) {
        onChange(this.data.cValue, event);
      }
    },
    triggleVisible() {
      const event = fmtEvent(this.props);
      const { onOpen, type } = this.props;
      const { cValue } = this.data;
      const visible = this._store.triggleVisible(this.$id);
      if (visible) {
        if (onOpen) {
          onOpen(event);
        }
        this.setData({
          currentValue: cValue || (type === 'multiple' ? [] : ''),
        });
      }
    },
  },
});
