import { CheckboxItemDefaultProps } from './props';
import { store } from '../context';

Component({
  props: CheckboxItemDefaultProps,
  data: {
    _checked: false,
    _disabled: false,
  },
  didMount() {
    const { uid } = this.props;
    const setDisabled = (_disabled: boolean) => this.setData({ _disabled });
    const setChecked = (_checked: boolean) => this.setData({ _checked });
    const getChecked = () => this.data._checked;
    const getItemPropsVal = (key: string) => this.props[key];

    store.addItem(uid, `${this.$id}`, { setDisabled, getChecked, setChecked, getItemPropsVal });

    // 用户指定checkBoxItem的key，节点变更如下：123456 -> 78，节点不会复用，只能在创建节点的时候更新
    try {
      store.updateItemValue(uid, `${this.$id}`);
    // eslint-disable-next-line no-empty
    } catch (err) {}
  },
  didUpdate(prevProps) {
    const { uid, value } = this.props;
    const { value: oldValue } = prevProps;
    if (value !== oldValue) {
      // 考虑到a:for的情况
      store.updateItemValue(uid, `${this.$id}`);
    }
  },
  didUnmount() {
    const { uid } = this.props;
    store.removeItem(uid, `${this.$id}`);
  },
  methods: {
    onItemChange(value) {
      const { uid } = this.props;
      if (store.checkControlledByUID(uid)) return;
      store.triggerItem(uid, `${this.$id}`, value);
    },
  },
});
