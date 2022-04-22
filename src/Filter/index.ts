/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterDefaultProps } from './props';
import { context } from './context';
import { objectEntries } from '../_util/tools';

type TPlaceholderArray = {
  key: 'placeHolderArray',
  val: Record<string, string>
}
type TActiveArray = {
  key: 'activeArray',
  val: Record<string, boolean>
}
type TCurrentFilterItemId = {
  key: 'currentFilterItemId',
  val: string
}

Component({
  props: FilterDefaultProps,
  data: {
    placeHolderObj: {},
    activeObj: {},
    currentFilterItemId: '',
  },
  didMount() {
    const key = `${this.$page.$id}-${this.props.uid}`;
    const setGroupDataVal = (val: TPlaceholderArray | TActiveArray | TCurrentFilterItemId) => {
      switch (val.key) {
        case 'placeHolderArray':
          this.setData({
            placeHolderObj: val.val,
          });
          break;
        case 'activeArray':
          this.setData({
            activeObj: { ...this.data.activeObj, ...val.val },
          });
          break;
        case 'currentFilterItemId':
          this.setData({
            currentFilterItemId: val.val,
          });
          break;
        default:
          break;
      }
    };
    const getGroupDataVal = () => this.data.placeHolderObj;

    context.addGroup(key);
    context.setGroupDataVal(key, setGroupDataVal);
    context.getGroupDataVal(key, getGroupDataVal);
    context.updateGroupValue(key);
  },
  didUnmount() {
    const key = `${this.$page.$id}-${this.props.uid}`;
    context.removeGroup(key);
  },
  methods: {
    showFilterItem(e) {
      const key = `${this.$page.$id}-${this.props.uid}`;
      const group = context.getGroup(key);
      if (group) {
        objectEntries(group.items).forEach(([, v]) => {
          if (v.getid() === e.currentTarget.dataset.filterItemId) {
            const show = v.getShow();
            // 记录 filterItem 数据以重置
            if (!show) {
              if (v.isMult()) {
                v.setPrevValue(v.getCurValue());
              }
              v.setShow(!show);
              this.setData({
                currentFilterItemId: `${v.getid()}`,
              });
              return;
            }
            v.setShow(!show);
            this.setData({
              currentFilterItemId: '',
            });
          } else {
            v.getShow() && v.setShow(false);
          }
        });
      }
    },
  },
});
